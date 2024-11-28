import axios from 'axios';

// Hàm decode HTML entities cơ bản
const decodeHTMLEntities = (text) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

// Hàm decode cho Thanh Niên
const decodeThanhnien = (text) => {
  return text.replace(/&amp;/g, '&')
            .replace(/&#039;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&agrave;/g, 'à')
            .replace(/&aacute;/g, 'á')
            .replace(/&acirc;/g, 'â')
            .replace(/&atilde;/g, 'ã')
            .replace(/&egrave;/g, 'è')
            .replace(/&eacute;/g, 'é')
            .replace(/&ecirc;/g, 'ê')
            .replace(/&igrave;/g, 'ì')
            .replace(/&iacute;/g, 'í')
            .replace(/&ograve;/g, 'ò')
            .replace(/&oacute;/g, 'ó')
            .replace(/&ocirc;/g, 'ô')
            .replace(/&otilde;/g, 'õ')
            .replace(/&ugrave;/g, 'ù')
            .replace(/&uacute;/g, 'ú')
            .replace(/&yacute;/g, 'ý');
};

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json?rss_url=';
const RSS_FEEDS = [
  {
    url: encodeURIComponent('https://thanhnien.vn/rss/cong-nghe.rss'),
    source: 'Thanh Niên',
    imageExtractor: (description) => {
      const regex = /<img.*?src="(.*?)".*?>/i;
      const match = description.match(regex);
      return match ? match[1] : null;
    },
    decoder: decodeThanhnien // Sử dụng decoder riêng cho Thanh Niên
  },
  {
    url: encodeURIComponent('https://genk.vn/rss/home.rss'),
    source: 'GenK',
    imageExtractor: (description) => {
      const regex = /<img[^>]+src="([^">]+)"[^>]*>/;
      const match = description.match(regex);
      if (match && match[1]) {
        return match[1].replace(/\&amp;/g, '&');
      }
      return null;
    },
    decoder: decodeHTMLEntities // Sử dụng decoder cơ bản cho GenK
  }
];

export const fetchNews = async (category = 'all') => {
  try {
    const newsItems = [];
    
    for (const feed of RSS_FEEDS) {
      const response = await axios.get(`${RSS2JSON_API}${feed.url}`);
      const items = response.data.items.map(item => {
        const imageUrl = feed.imageExtractor(item.description);
        
        return {
          id: item.guid,
          // Sử dụng decoder tương ứng với nguồn
          title: feed.decoder(item.title),
          excerpt: feed.decoder(
            item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...'
          ),
          link: item.link,
          image: imageUrl || item.thumbnail || 'https://i1-sohoa.vnecdn.net/2023/12/05/avatar-1701757095-1701757103-4367-1701757255.png',
          publishDate: new Date(item.pubDate).toLocaleDateString('vi-VN'),
          source: feed.source
        };
      });
      
      newsItems.push(...items);
    }

    const validItems = newsItems.filter(item => {
      const hasValidImage = item.image && 
        !item.image.includes('blank.png') && 
        !item.image.includes('placeholder') &&
        item.image.startsWith('http');
      return hasValidImage;
    });

    validItems.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    return {
      featured: validItems[0],
      items: validItems.slice(1)
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      featured: {
        id: 1,
        title: "RTX 4070 SUPER ra mắt với hiệu năng vượt trội",
        excerpt: "NVIDIA vừa giới thiệu dòng card đồ họa RTX 4070 SUPER mới với hiệu năng tăng 20% so với phiên bản tiêu chuẩn...",
        image: "https://i1-sohoa.vnecdn.net/2023/12/05/avatar-1701757095-1701757103-4367-1701757255.png",
        source: "VnExpress", 
        publishDate: "Hôm nay"
      },
      items: Array(6).fill().map((_, i) => ({
        id: i + 2,
        title: `Tin công nghệ ${i + 1}`,
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: `https://i1-sohoa.vnecdn.net/2023/12/05/avatar-1701757095-1701757103-4367-1701757255.png`,
        source: ["Thanh Niên", "GenK"][i % 2],
        publishDate: "2 giờ trước"
      }))
    };
  }
}; 