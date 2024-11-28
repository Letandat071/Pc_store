import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import OrderDetail from './OrderDetail';

const Orders = () => {
  const orders = [
    {
      id: 'DH001',
      date: '20/03/2024',
      total: 12500000,
      status: 'Đang giao hàng',
      items: [
        { name: 'CPU Intel Core i5-12400F', quantity: 1 },
        { name: 'RAM Kingston Fury 16GB', quantity: 2 }
      ]
    },
    {
      id: 'DH002',
      date: '15/03/2024',
      total: 8900000,
      status: 'Đã giao hàng',
      items: [
        { name: 'VGA RTX 3060 Ti', quantity: 1 }
      ]
    }
  ];

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Đơn hàng của tôi</h2>
      
      {orders.map(order => (
        <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-sm text-gray-600">Mã đơn hàng: </span>
              <span className="font-medium">{order.id}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'Đã giao hàng' 
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {order.status}
            </span>
          </div>

          <div className="border-t border-b border-gray-200 py-4 my-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">{item.name} x{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-600">Ngày đặt: </span>
              <span className="font-medium">{order.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-[#E30019]">
                {order.total.toLocaleString()}đ
              </span>
              <button 
                onClick={() => setSelectedOrder(order)}
                className="flex items-center space-x-2 text-[#0276ED] hover:text-[#0276ED]/80"
              >
                <FaEye />
                <span>Chi tiết</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedOrder && (
        <OrderDetail 
          order={selectedOrder} 
          onClose={() => setSelectedOrder(null)} 
        />
      )}
    </div>
  );
};

export default Orders; 