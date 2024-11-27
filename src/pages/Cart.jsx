import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const location = useLocation();
  const isCheckout = location.pathname.includes('/cart/checkout');

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'CPU Intel Core i5-12400F',
      price: 4290000,
      image: '/images/products/cpu-i5.jpg',
      quantity: 1
    },
    {
      id: 2, 
      name: 'RAM Kingston Fury 16GB',
      price: 1590000,
      image: '/images/products/ram-kingston.jpg',
      quantity: 2
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1
        };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {isCheckout ? (
        <Outlet />
      ) : (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Giỏ hàng của bạn</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Danh sách sản phẩm */}
            <div className="lg:w-2/3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 mb-4 bg-white rounded-lg border border-gray-200">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-[#E30019] font-medium">{item.price.toLocaleString()}đ</p>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border border-gray-200 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:text-[#E30019]"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="px-4 py-1 border-x border-gray-200">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:text-[#E30019]"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-[#E30019]"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tổng tiền và đặt hàng */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Tổng đơn hàng</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính:</span>
                    <span>{total.toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển:</span>
                    <span>Miễn phí</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold text-gray-900">
                      <span>Tổng cộng:</span>
                      <span className="text-[#E30019]">{total.toLocaleString()}đ</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="checkout"
                  className="w-full block text-center py-3 px-4 bg-[#E30019] text-white rounded-lg hover:bg-[#E30019]/90 transition-colors"
                >
                  Tiến hành đặt hàng
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;