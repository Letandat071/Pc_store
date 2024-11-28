import React from 'react';
import { FaBox, FaTag, FaPercent, FaInfoCircle } from 'react-icons/fa';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Đơn hàng #DH001 đã được giao thành công',
      message: 'Đơn hàng của bạn đã được giao thành công. Hãy đánh giá sản phẩm để nhận xu nhé!',
      time: '2 giờ trước',
      icon: <FaBox className="text-blue-500" />
    },
    {
      id: 2,
      type: 'promotion',
      title: 'Giảm giá 20% cho RAM Kingston',
      message: 'Ưu đãi đặc biệt: Giảm giá 20% cho tất cả RAM Kingston. Nhanh tay đặt hàng!',
      time: '1 ngày trước',
      icon: <FaPercent className="text-[#E30019]" />
    },
    {
      id: 3,
      type: 'product',
      title: 'Sản phẩm đã có hàng trở lại',
      message: 'RTX 4070 Ti đã có hàng trở lại. Đặt hàng ngay!',
      time: '2 ngày trước',
      icon: <FaTag className="text-green-500" />
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Thông báo</h2>

      {notifications.length === 0 ? (
        <div className="text-center py-8">
          <FaInfoCircle className="mx-auto text-gray-400 text-4xl mb-4" />
          <p className="text-gray-500">Bạn chưa có thông báo nào</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map(notification => (
            <div key={notification.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{notification.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                  <span className="text-gray-400 text-xs mt-2 block">{notification.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications; 