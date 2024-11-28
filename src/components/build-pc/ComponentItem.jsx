import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ComponentItem = ({ item, isSelected, onSelect }) => {
  return (
    <div 
      className={`p-4 border rounded-lg cursor-pointer transition-all ${
        isSelected ? 'border-[#E30019] bg-red-50' : 'border-gray-200 hover:border-[#E30019]'
      }`}
      onClick={() => onSelect(item)}
    >
      <div className="flex gap-4">
        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            {isSelected && <FaCheck className="text-[#E30019]" />}
          </div>
          <p className="text-sm text-gray-600 mt-1">{item.specs}</p>
          <div className="mt-2">
            <span className="text-[#E30019] font-medium">{item.price.toLocaleString()}đ</span>
            {item.oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                {item.oldPrice.toLocaleString()}đ
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentItem; 