import React, { useState } from 'react';
import { FaUser, FaShoppingBag, FaHeart, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Orders from '../components/profile/Orders';
import Wishlist from '../components/profile/Wishlist';
import Notifications from '../components/profile/Notifications';
import Settings from '../components/profile/Settings';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedFile, setSelectedFile] = useState(null);

  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    phone: '0123456789',
    avatar: 'https://via.placeholder.com/150',
    address: '123 Đường ABC, Quận 1, TP.HCM'
  };

  const menuItems = [
    { id: 'profile', label: 'Thông tin cá nhân', icon: <FaUser /> },
    { id: 'orders', label: 'Đơn hàng của tôi', icon: <FaShoppingBag /> },
    { id: 'wishlist', label: 'Sản phẩm yêu thích', icon: <FaHeart /> },
    { id: 'notifications', label: 'Thông báo', icon: <FaBell /> },
    { id: 'settings', label: 'Cài đặt', icon: <FaCog /> }
  ];

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
        // Ở đây bạn có thể thêm logic để gửi ảnh lên server
        // Ví dụ: uploadAvatarToServer(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Thông tin cá nhân</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={selectedFile || user.avatar} 
                  alt="Avatar" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  <label 
                    htmlFor="avatar-upload" 
                    className="text-[#0276ED] hover:text-[#0276ED]/80 text-sm cursor-pointer"
                  >
                    Thay đổi ảnh đại diện
                  </label>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Họ và tên</label>
                  <input 
                    type="text" 
                    value={user.name}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    value={user.email}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Số điện thoại</label>
                  <input 
                    type="tel" 
                    value={user.phone}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Địa chỉ</label>
                  <input 
                    type="text" 
                    value={user.address}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="bg-[#E30019] text-white px-6 py-2 rounded-lg hover:bg-[#E30019]/90">
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return <Orders />;
      case 'wishlist':
        return <Wishlist />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      // Các tab khác sẽ được thêm sau
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
              <img src={user.avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            
            <nav className="mt-4">
              <ul className="space-y-2">
                {menuItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors
                        ${activeTab === item.id 
                          ? 'bg-[#E30019]/10 text-[#E30019]' 
                          : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <FaSignOutAlt />
                    <span>Đăng xuất</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="md:w-3/4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile; 