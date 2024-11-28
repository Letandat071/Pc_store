import React from 'react';
import { FaHeadset, FaEnvelope, FaComments, FaBook, FaTools, FaQuestionCircle } from 'react-icons/fa';

const Support = () => {
  const supportChannels = [
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: 'Hotline hỗ trợ',
      description: 'Gọi ngay 1900 1234',
      detail: 'Hỗ trợ từ 8:00 - 21:00 mỗi ngày'
    },
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: 'Email hỗ trợ',
      description: 'support@pcstore.com',
      detail: 'Phản hồi trong vòng 24h'
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Chat trực tuyến',
      detail: 'Hỗ trợ nhanh chóng'
    }
  ];

  const supportCategories = [
    {
      icon: <FaBook className="w-6 h-6" />,
      title: 'Hướng dẫn sử dụng',
      items: ['Cài đặt Windows', 'Cập nhật driver', 'Bảo trì máy tính']
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: 'Xử lý sự cố',
      items: ['Máy không khởi động', 'Màn hình xanh', 'Quá nhiệt']
    },
    {
      icon: <FaQuestionCircle className="w-6 h-6" />,
      title: 'Câu hỏi thường gặp',
      items: ['Chính sách bảo hành', 'Đổi trả sản phẩm', 'Thanh toán']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Hỗ trợ kỹ thuật</h1>

      {/* Kênh hỗ trợ */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {supportChannels.map((channel, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#E30019] transition-colors">
            <div className="text-[#E30019] mb-4">{channel.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
            <p className="text-lg text-[#E30019] font-medium mb-1">{channel.description}</p>
            <p className="text-sm text-gray-600">{channel.detail}</p>
          </div>
        ))}
      </div>

      {/* Danh mục hỗ trợ */}
      <div className="grid md:grid-cols-3 gap-8">
        {supportCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[#E30019]">{category.icon}</div>
              <h3 className="font-bold text-gray-900">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-[#E30019] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support; 