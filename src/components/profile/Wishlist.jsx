import React from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Laptop Gaming ASUS ROG Strix G15',
      price: 25990000,
      image: 'https://via.placeholder.com/150',
      inStock: true
    },
    {
      id: 2,
      name: 'Màn hình Gaming ASUS TUF 27"',
      price: 5490000,
      image: 'https://via.placeholder.com/150',
      inStock: false
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Sản phẩm yêu thích</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {wishlistItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex space-x-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-[#E30019] font-medium mt-1">
                  {item.price.toLocaleString()}đ
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {item.inStock ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                  <div className="flex space-x-2">
                    <button 
                      className={`p-2 rounded-lg ${
                        item.inStock 
                          ? 'bg-[#E30019] text-white hover:bg-[#E30019]/90' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!item.inStock}
                    >
                      <FaShoppingCart size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-[#E30019]">
                      <FaTrash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist; 