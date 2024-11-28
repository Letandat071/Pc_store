import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Pagination from './Pagination';

const ProductList = ({ filters, sortBy, category, currentPage, onPageChange }) => {
  // Demo data với nhiều sản phẩm hơn
  const products = Array(8).fill().map((_, index) => ({
    id: index + 1,
    name: `${['Laptop Gaming ASUS ROG', 'PC Gaming MSI', 'Laptop Dell Inspiron', 'Laptop HP Pavilion'][index % 4]} ${index + 1}`,
    price: Math.floor(Math.random() * (50000000 - 10000000) + 10000000),
    image: `https://picsum.photos/300/200?random=${index}`,
    brand: ['ASUS', 'MSI', 'Dell', 'HP'][index % 4],
    specs: {
      cpu: ['AMD Ryzen 7 6800H', 'Intel Core i7-12700H', 'Intel Core i5-12500H', 'AMD Ryzen 5 5600H'][index % 4],
      ram: ['16GB', '32GB', '8GB', '64GB'][index % 4],
      gpu: ['NVIDIA RTX 3060', 'NVIDIA RTX 3070', 'NVIDIA RTX 3050', 'AMD RX 6600'][index % 4]
    },
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    description: 'Laptop gaming cao cấp với hiệu năng mạnh mẽ, màn hình 165Hz, tản nhiệt hiệu quả. Thiết kế gaming độc đáo, bàn phím RGB và âm thanh vòm sống động.'
  }));

  return (
    <>
      <div className="space-y-3 mb-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="flex gap-4 p-3">
              <Link to={`/product/${product.id}`} className="w-32 h-32 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                    {product.brand}
                  </span>
                  <div className="flex items-center text-xs">
                    <FaStar className="w-3 h-3 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <Link 
                  to={`/product/${product.id}`}
                  className="text-sm font-medium text-gray-800 hover:text-[#E30019] line-clamp-1"
                >
                  {product.name}
                </Link>

                <div className="mt-1.5 space-y-0.5 text-xs text-gray-500">
                  <p className="line-clamp-1">{product.specs.cpu}</p>
                  <p className="line-clamp-1">{product.specs.ram} | {product.specs.gpu}</p>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#E30019]">
                      {product.price.toLocaleString()}đ
                    </span>
                    {product.oldPrice && (
                      <span className="text-[11px] text-gray-400 line-through">
                        {product.oldPrice.toLocaleString()}đ
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-full text-gray-400 hover:text-[#E30019]">
                      <FaHeart className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 bg-[#E30019] rounded-full text-white">
                      <FaShoppingCart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination 
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default ProductList; 