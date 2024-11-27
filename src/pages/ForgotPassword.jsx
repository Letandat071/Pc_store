import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: nhập email, 2: nhập mã OTP, 3: đặt mật khẩu mới
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Gửi request để gửi mã OTP về email
    console.log('Send OTP to:', email);
    setStep(2);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Xác thực mã OTP
    console.log('Verify OTP:', otp);
    setStep(3);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Đặt lại mật khẩu mới
    console.log('Reset password:', newPassword);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Quên mật khẩu
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Nhập email của bạn để nhận mã xác thực
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#E30019] focus:border-[#E30019] focus:z-10 sm:text-sm"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-[#E30019] hover:bg-[#E30019]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E30019]"
              >
                Gửi mã xác thực
              </button>
            </form>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Nhập mã xác thực
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Mã xác thực đã được gửi đến email {email}
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleOTPSubmit}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Mã OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  maxLength={6}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#E30019] focus:border-[#E30019] focus:z-10 sm:text-sm"
                  placeholder="Nhập mã 6 số"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-[#E30019] hover:bg-[#E30019]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E30019]"
              >
                Xác nhận
              </button>
            </form>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Đặt lại mật khẩu
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handlePasswordSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mật khẩu mới
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#E30019] focus:border-[#E30019] focus:z-10 sm:text-sm"
                    placeholder="Nhập mật khẩu mới"
                    value={newPassword.password}
                    onChange={(e) => setNewPassword({...newPassword, password: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Xác nhận mật khẩu
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-[#E30019] focus:border-[#E30019] focus:z-10 sm:text-sm"
                    placeholder="Xác nhận mật khẩu mới"
                    value={newPassword.confirmPassword}
                    onChange={(e) => setNewPassword({...newPassword, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-[#E30019] hover:bg-[#E30019]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E30019]"
              >
                Đặt lại mật khẩu
              </button>
            </form>
          </>
        );
        
      default:
        return (
          <div className="text-center">
            <p className="text-red-500">Đã xảy ra lỗi không mong muốn</p>
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-8 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        {renderStep()}
        
        <div className="mt-4 text-center">
          <Link 
            to="/login" 
            className="inline-flex items-center text-sm font-medium text-[#0276ED] hover:text-[#0276ED]/80"
          >
            <FaArrowLeft className="mr-2" />
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;