import React, { useState } from 'react';
import { FaBell, FaLock, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotions: false,
    twoFactorAuth: false
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Xử lý đổi mật khẩu
    console.log('Password change:', passwordData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Cài đặt</h2>

      {/* Thông báo */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Thông báo</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">Email thông báo</p>
              <p className="text-sm text-gray-500">Nhận thông báo qua email</p>
            </div>
            <button onClick={() => handleToggle('emailNotifications')}>
              {settings.emailNotifications ? 
                <FaToggleOn size={24} className="text-[#E30019]" /> : 
                <FaToggleOff size={24} className="text-gray-400" />
              }
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">Cập nhật đơn hàng</p>
              <p className="text-sm text-gray-500">Thông báo về trạng thái đơn hàng</p>
            </div>
            <button onClick={() => handleToggle('orderUpdates')}>
              {settings.orderUpdates ? 
                <FaToggleOn size={24} className="text-[#E30019]" /> : 
                <FaToggleOff size={24} className="text-gray-400" />
              }
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">Khuyến mãi</p>
              <p className="text-sm text-gray-500">Nhận thông tin về khuyến mãi và ưu đãi</p>
            </div>
            <button onClick={() => handleToggle('promotions')}>
              {settings.promotions ? 
                <FaToggleOn size={24} className="text-[#E30019]" /> : 
                <FaToggleOff size={24} className="text-gray-400" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Bảo mật */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Bảo mật</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">Xác thực 2 lớp</p>
              <p className="text-sm text-gray-500">Tăng cường bảo mật cho tài khoản</p>
            </div>
            <button onClick={() => handleToggle('twoFactorAuth')}>
              {settings.twoFactorAuth ? 
                <FaToggleOn size={24} className="text-[#E30019]" /> : 
                <FaToggleOff size={24} className="text-gray-400" />
              }
            </button>
          </div>

          <div>
            <button
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="text-[#0276ED] hover:text-[#0276ED]/80 text-sm font-medium"
            >
              Đổi mật khẩu
            </button>

            {showPasswordForm && (
              <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Xác nhận mật khẩu mới
                  </label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E30019]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#E30019] text-white px-4 py-2 rounded-lg hover:bg-[#E30019]/90"
                >
                  Cập nhật mật khẩu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 