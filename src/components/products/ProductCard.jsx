import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
        </Link>
        
        <div className="absolute top-2 right-2 space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-1.5 bg-white rounded-full text-gray-600 hover:text-[#E30019] shadow-sm">
            <FaHeart className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 bg-[#E30019] rounded-full text-white shadow-sm">
            <FaShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>

        {product.discount && (
          <div className="absolute top-2 left-2 bg-[#E30019] text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
            -{product.discount}%
          </div>
        )}
        
        {product.tags && (
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
            {product.tags}
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-1.5">
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
          className="text-sm font-medium text-gray-800 hover:text-[#E30019] line-clamp-2 min-h-[40px]"
        >
          {product.name}
        </Link>

        <div className="mt-2 space-y-0.5 text-xs text-gray-500">
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
          <span className="text-[11px] text-gray-400">{product.reviews} đánh giá</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 