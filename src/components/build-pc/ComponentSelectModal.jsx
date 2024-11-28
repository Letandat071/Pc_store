import React, { useState } from 'react';
import { FaTimes, FaSearch, FaFilter } from 'react-icons/fa';
import ComponentItem from './ComponentItem';

const ComponentSelectModal = ({ category, selectedComponent, onSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [0, 50000000],
    series: [],
    memory: [],
    cores: []
  });

  // Định nghĩa filters cho từng category
  const categoryFilters = {
    cpu: {
      brands: ['AMD', 'Intel'],
      series: ['Ryzen 9', 'Ryzen 7', 'Ryzen 5', 'Core i9', 'Core i7', 'Core i5'],
      cores: ['6 Cores', '8 Cores', '12 Cores', '16 Cores', '24 Cores']
    },
    gpu: {
      brands: ['NVIDIA', 'AMD'],
      memory: ['8GB', '12GB', '16GB', '24GB'],
      series: ['RTX 4090', 'RTX 4080', 'RTX 4070', 'RX 7900']
    },
    mainboard: {
      brands: ['ASUS', 'MSI', 'Gigabyte', 'ASRock'],
      chipsets: ['Z790', 'X670E', 'B650', 'H770'],
      formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
    },
    // ... thêm filters cho các category khác
  };

  // Demo data cho các linh kiện
  const components = {
    cpu: [
      {
        id: 1,
        name: 'AMD Ryzen 9 7950X',
        specs: '16 Cores, 32 Threads, Up to 5.7GHz, 80MB Cache',
        price: 17990000,
        oldPrice: 19990000,
        brand: 'AMD',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'Intel Core i9-13900K',
        specs: '24 Cores, 32 Threads, Up to 5.8GHz, 36MB Cache',
        price: 16490000,
        oldPrice: 17990000,
        brand: 'Intel',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 3,
        name: 'AMD Ryzen 7 7800X3D',
        specs: '8 Cores, 16 Threads, Up to 5.0GHz, 104MB Cache',
        price: 11990000,
        brand: 'AMD',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 4,
        name: 'Intel Core i7-13700K',
        specs: '16 Cores, 24 Threads, Up to 5.4GHz, 30MB Cache',
        price: 10990000,
        brand: 'Intel',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 5,
        name: 'AMD Ryzen 5 7600X',
        specs: '6 Cores, 12 Threads, Up to 5.3GHz, 38MB Cache',
        price: 7990000,
        oldPrice: 8990000,
        brand: 'AMD',
        image: 'https://picsum.photos/200/200'
      }
    ],
    gpu: [
      {
        id: 1,
        name: 'NVIDIA GeForce RTX 4090',
        specs: '24GB GDDR6X, 2.52 GHz, 16384 CUDA Cores',
        price: 46990000,
        brand: 'NVIDIA',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'AMD Radeon RX 7900 XTX',
        specs: '24GB GDDR6, 2.5 GHz, 96 Compute Units',
        price: 29990000,
        brand: 'AMD',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 3,
        name: 'NVIDIA GeForce RTX 4080',
        specs: '16GB GDDR6X, 2.51 GHz, 9728 CUDA Cores',
        price: 28990000,
        oldPrice: 31990000,
        brand: 'NVIDIA',
        image: 'https://picsum.photos/200/200'
      }
    ],
    mainboard: [
      {
        id: 1,
        name: 'ASUS ROG MAXIMUS Z790 HERO',
        specs: 'Intel Z790, DDR5, PCIe 5.0, WiFi 6E',
        price: 14990000,
        brand: 'ASUS',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'MSI MEG X670E ACE',
        specs: 'AMD X670E, DDR5, PCIe 5.0, WiFi 6E',
        price: 15990000,
        brand: 'MSI',
        image: 'https://picsum.photos/200/200'
      }
    ],
    ram: [
      {
        id: 1,
        name: 'G.Skill Trident Z5 RGB',
        specs: 'DDR5-6000MHz CL30 32GB (2x16GB)',
        price: 6990000,
        brand: 'G.Skill',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'Corsair Dominator Platinum RGB',
        specs: 'DDR5-5600MHz CL36 64GB (2x32GB)',
        price: 9990000,
        brand: 'Corsair',
        image: 'https://picsum.photos/200/200'
      }
    ],
    storage: [
      {
        id: 1,
        name: 'Samsung 990 PRO',
        specs: '2TB NVMe PCIe 4.0, 7450/6900 MB/s',
        price: 5990000,
        brand: 'Samsung',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'WD Black SN850X',
        specs: '1TB NVMe PCIe 4.0, 7300/6600 MB/s',
        price: 3990000,
        brand: 'Western Digital',
        image: 'https://picsum.photos/200/200'
      }
    ],
    psu: [
      {
        id: 1,
        name: 'Corsair AX1600i',
        specs: '1600W, Titanium, Full Modular',
        price: 12990000,
        brand: 'Corsair',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'be quiet! Dark Power Pro 12',
        specs: '1200W, Platinum, Full Modular',
        price: 8990000,
        brand: 'be quiet!',
        image: 'https://picsum.photos/200/200'
      }
    ],
    case: [
      {
        id: 1,
        name: 'Lian Li O11 Dynamic EVO',
        specs: 'Full Tower, Tempered Glass, White',
        price: 4990000,
        brand: 'Lian Li',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'Phanteks Enthoo 719',
        specs: 'Full Tower, Dual System Support, Black',
        price: 5990000,
        brand: 'Phanteks',
        image: 'https://picsum.photos/200/200'
      }
    ],
    cooling: [
      {
        id: 1,
        name: 'NZXT Kraken Z73 RGB',
        specs: '360mm AIO, LCD Display, RGB Fans',
        price: 7990000,
        brand: 'NZXT',
        image: 'https://picsum.photos/200/200'
      },
      {
        id: 2,
        name: 'Noctua NH-D15 chromax.black',
        specs: 'Dual Tower, 2x 140mm Fans',
        price: 3990000,
        brand: 'Noctua',
        image: 'https://picsum.photos/200/200'
      }
    ]
  };

  const filteredComponents = components[category.type]?.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.brand.length === 0 || filters.brand.includes(item.brand))
  );

  // Render filters dựa trên category
  const renderFilters = () => {
    const currentFilters = categoryFilters[category.type];
    if (!currentFilters) return null;

    return Object.entries(currentFilters).map(([filterType, options]) => (
      <div key={filterType}>
        <h3 className="font-medium text-gray-900 mb-3 capitalize">
          {filterType}
        </h3>
        {options.map(option => (
          <label key={option} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters[filterType]?.includes(option)}
              onChange={(e) => {
                const newValues = e.target.checked
                  ? [...(filters[filterType] || []), option]
                  : (filters[filterType] || []).filter(v => v !== option);
                setFilters({...filters, [filterType]: newValues});
              }}
              className="rounded border-gray-300 text-[#E30019] focus:ring-[#E30019]"
            />
            <span className="text-gray-600">{option}</span>
          </label>
        ))}
      </div>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl rounded-lg max-h-[80vh] flex flex-col m-4">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            Chọn {category.title}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Filters sidebar */}
          <div className="w-64 p-4 border-r border-gray-200 overflow-y-auto">
            <div className="space-y-6">
              {renderFilters()}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm linh kiện..."
                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredComponents?.map(item => (
                <ComponentItem
                  key={item.id}
                  item={item}
                  isSelected={selectedComponent?.id === item.id}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSelectModal; 