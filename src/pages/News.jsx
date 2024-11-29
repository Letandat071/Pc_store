import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/news/NewsCard';
import NewsSkeleton from '../components/news/NewsSkeleton';
import { fetchNews } from '../services/newsService';
import { FaNewspaper, FaSearch } from 'react-icons/fa';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🌟' },
    { id: 'hardware', name: 'Phần cứng', icon: '💻' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'tech', name: 'Công nghệ', icon: '📱' },
    { id: 'review', name: 'Đánh giá', icon: '⭐' }
  ];

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews(currentCategory);
        setNews(data);
        setFilteredNews(data.items || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      setLoading(false);
    };

    loadNews();
  }, [currentCategory]);

  useEffect(() => {
    if (!news.items) return;
    
    const filtered = news.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchTerm, news.items]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FaNewspaper className="text-2xl text-[#E30019]" />
              <h1 className="text-2xl font-bold">Tin Công Nghệ</h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm tin tức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-[#E30019] w-64"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex items-center gap-2 ${
                  currentCategory === category.id
                    ? 'bg-[#E30019] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured News */}
        {!loading && news.featured && (
          <div className="mb-12">
            <a href={news.featured.link} target="_blank" rel="noopener noreferrer">
              <div className="relative rounded-xl overflow-hidden group shadow-xl">
                <img 
                  src={news.featured.image} 
                  alt={news.featured.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#E30019] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Tin Nổi Bật
                      </span>
                      <span className="text-white/80">
                        {news.featured.publishDate}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {news.featured.title}
                    </h2>
                    <p className="text-white/90 text-lg line-clamp-2 mb-4">
                      {news.featured.excerpt}
                    </p>
                    <span className="text-[#E30019] bg-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.featured.source}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6).fill().map((_, i) => <NewsSkeleton key={i} />)
          ) : filteredNews.length > 0 ? (
            filteredNews.map(item => <NewsCard key={item.id} news={item} />)
          ) : (
            <div className="col-span-3 text-center py-8 text-gray-500">
              Không tìm thấy tin tức phù hợp
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News; 