import React from 'react';
import { FaSort } from 'react-icons/fa';

const SortDropdown = ({ value, onChange }) => {
  const sortOptions = [
    { value: 'newest', label: 'Mới nhất' },
    { value: 'price-asc', label: 'Giá tăng dần' },
    { value: 'price-desc', label: 'Giá giảm dần' },
    { value: 'popular', label: 'Phổ biến nhất' },
    { value: 'rating', label: 'Đánh giá cao' }
  ];

  return (
    <div className="flex items-center gap-2">
      <FaSort className="text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-none bg-transparent focus:ring-0 text-gray-600 cursor-pointer"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown; 