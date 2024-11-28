import React, { useEffect } from 'react';
import { FaTimes, FaBox, FaTruck, FaCheck } from 'react-icons/fa';

const OrderDetail = ({ order, onClose }) => {
  const orderStatus = [
    { status: 'Đã đặt hàng', icon: <FaBox />, done: true },
    { status: 'Đang xử lý', icon: <FaBox />, done: true },
    { status: 'Đang giao hàng', icon: <FaTruck />, done: order.status === 'Đang giao hàng' || order.status === 'Đã giao hàng' },
    { status: 'Đã giao hàng', icon: <FaCheck />, done: order.status === 'Đã giao hàng' }
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed top-[-100px] left-0 right-0 bottom-[-100px] z-[100] bg-black/30"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center mt-[100px]">
        <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Chi tiết đơn hàng #{order.id}</h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="relative mb-8">
              <div className="flex justify-between mb-8">
                {orderStatus.map((status, index) => (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      status.done ? 'bg-[#E30019] text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {status.icon}
                    </div>
                    <span className={`text-sm mt-2 ${
                      status.done ? 'text-[#E30019] font-medium' : 'text-gray-400'
                    }`}>
                      {status.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
                <div 
                  className="h-full bg-[#E30019]" 
                  style={{
                    width: order.status === 'Đã giao hàng' ? '100%' : 
                           order.status === 'Đang giao hàng' ? '66%' : '33%'
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Ngày đặt hàng:</span>
                <span className="font-medium">{order.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Phương thức thanh toán:</span>
                <span className="font-medium">Thanh toán khi nhận hàng</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Địa chỉ giao hàng:</span>
                <span className="font-medium text-right">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-4">Sản phẩm</h4>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://via.placeholder.com/60" 
                        alt={item.name}
                        className="w-15 h-15 object-cover rounded"
                      />
                      <div>
                        <h5 className="font-medium">{item.name}</h5>
                        <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tạm tính:</span>
                  <span>{order.total.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Phí vận chuyển:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2">
                  <span>Tổng cộng:</span>
                  <span className="text-[#E30019]">{order.total.toLocaleString()}đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail; 