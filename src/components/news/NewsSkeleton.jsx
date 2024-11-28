import React from 'react';

const NewsSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden animate-pulse">
      {/* Ảnh */}
      <div className="w-full h-48 bg-gray-200" />
      
      <div className="p-4">
        {/* Category */}
        <div className="w-20 h-5 bg-gray-200 rounded-full mb-3" />
        
        {/* Title */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Meta */}
        <div className="flex justify-between">
          <div className="w-24 h-3 bg-gray-200 rounded" />
          <div className="w-24 h-3 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton; 