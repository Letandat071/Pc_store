import React from 'react';
import { FaFilter } from 'react-icons/fa';
import PriceRangeSlider from './PriceRangeSlider';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const filterCategories = {
    brands: {
      title: 'Thương hiệu',
      options: ['ASUS', 'MSI', 'Gigabyte', 'Dell', 'HP', 'Lenovo']
    },
    chipTypes: {
      title: 'Loại chip',
      options: ['Core i3', 'Core i5', 'Core i7', 'Core i9', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7']
    },
    chipBrands: {
      title: 'Hãng chip',
      options: ['Intel', 'AMD']
    },
    ramSizes: {
      title: 'RAM',
      options: ['4GB', '8GB', '16GB', '32GB', '64GB']
    },
    vgaBrands: {
      title: 'Card đồ họa',
      options: ['NVIDIA', 'AMD', 'Intel']
    }
  };

  const handleCheckboxChange = (category, value) => {
    const currentFilters = [...filters[category]];
    const index = currentFilters.indexOf(value);
    
    if (index === -1) {
      currentFilters.push(value);
    } else {
      currentFilters.splice(index, 1);
    }

    onFilterChange({
      ...filters,
      [category]: currentFilters
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <FaFilter className="text-[#E30019]" />
        <h2 className="text-lg font-bold text-gray-900">Bộ lọc sản phẩm</h2>
      </div>

      {Object.entries(filterCategories).map(([key, category]) => (
        <div key={key} className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">{category.title}</h3>
          <div className="space-y-2">
            {category.options.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters[key].includes(option)}
                  onChange={() => handleCheckboxChange(key, option)}
                  className="rounded border-gray-300 text-[#E30019] focus:ring-[#E30019]"
                />
                <span className="text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Khoảng giá</h3>
        <PriceRangeSlider
          value={filters.priceRange}
          onChange={(value) => onFilterChange({ ...filters, priceRange: value })}
        />
      </div>
    </div>
  );
};

export default FilterSidebar; 