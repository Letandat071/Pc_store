import React from 'react';
import { FaRegClock } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const handleImageError = (e) => {
    if (e.target.src.startsWith('//')) {
      e.target.src = 'https:' + e.target.src;
    } else {
      e.target.src = 'https://i1-sohoa.vnecdn.net/2023/12/05/avatar-1701757095-1701757103-4367-1701757255.png';
    }
  };

  return (
    <a href={news.link} target="_blank" rel="noopener noreferrer" className="group">
      <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="relative overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title}
            onError={handleImageError}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-[#E30019] shadow-lg">
            {news.source}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-gray-800 text-xl mb-3 line-clamp-2 group-hover:text-[#E30019] transition-colors">
            {news.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {news.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-[#E30019]" />
              <span>{news.publishDate}</span>
            </div>
            <span className="text-[#E30019] font-medium group-hover:underline">
              Đọc thêm
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard; 