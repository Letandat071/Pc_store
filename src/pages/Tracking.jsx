import React, { useState } from 'react';
import { FaSearch, FaBox, FaTruck, FaCheck } from 'react-icons/fa';

const Tracking = () => {
  const [orderCode, setOrderCode] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Demo data - trong thực tế sẽ gọi API
    if (orderCode) {
      setSearchResult({
        id: orderCode,
        status: 'Đang giao hàng',
        date: '20/03/2024',
        items: [
          { name: 'CPU Intel Core i5-12400F', quantity: 1, price: 4290000 },
          { name: 'RAM Kingston Fury 16GB', quantity: 2, price: 1590000 }
        ],
        timeline: [
          { status: 'Đã đặt hàng', date: '20/03/2024 08:30', done: true },
          { status: 'Đang xử lý', date: '20/03/2024 09:15', done: true },
          { status: 'Đang giao hàng', date: '20/03/2024 14:20', done: true },
          { status: 'Đã giao hàng', date: null, done: false }
        ]
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Tra cứu đơn hàng</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              placeholder="Nhập mã đơn hàng..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
            />
            <button 
              type="submit"
              className="bg-[#E30019] text-white px-6 py-2 rounded-lg hover:bg-[#E30019]/90 flex items-center gap-2"
            >
              <FaSearch />
              <span>Tra cứu</span>
            </button>
          </div>
        </form>

        {searchResult && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-600">Mã đơn hàng</p>
                <p className="font-medium">{searchResult.id}</p>
              </div>
              <div className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {searchResult.status}
              </div>
            </div>

            <div className="relative mb-8">
              <div className="flex justify-between mb-8">
                {searchResult.timeline.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.done ? 'bg-[#E30019] text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {index === 0 ? <FaBox /> : 
                       index === 3 ? <FaCheck /> : 
                       <FaTruck />}
                    </div>
                    <span className={`text-sm mt-2 text-center ${
                      step.done ? 'text-[#E30019] font-medium' : 'text-gray-400'
                    }`}>
                      {step.status}
                    </span>
                    {step.date && (
                      <span className="text-xs text-gray-500 mt-1">{step.date}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
                <div 
                  className="h-full bg-[#E30019]" 
                  style={{
                    width: `${(searchResult.timeline.filter(t => t.done).length - 1) * 33.33}%`
                  }}
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium mb-4">Chi tiết đơn hàng</h3>
              <div className="space-y-3">
                {searchResult.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking; 