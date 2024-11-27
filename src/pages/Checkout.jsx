import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    note: '',
    paymentMethod: 'cod'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order data:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Đặt hàng</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form thông tin */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Thông tin giao hàng</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E30019] focus:border-[#E30019]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E30019] focus:border-[#E30019]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E30019] focus:border-[#E30019]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ giao hàng
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E30019] focus:border-[#E30019]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ghi chú
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E30019] focus:border-[#E30019]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phương thức thanh toán
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-[#E30019] focus:ring-[#E30019]"
                    />
                    <span className="ml-2 text-gray-700">Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="banking"
                      checked={formData.paymentMethod === 'banking'}
                      onChange={handleChange}
                      className="text-[#E30019] focus:ring-[#E30019]"
                    />
                    <span className="ml-2 text-gray-700">Chuyển khoản ngân hàng</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 px-4 bg-[#E30019] text-white rounded-lg hover:bg-[#E30019]/90 transition-colors"
            >
              Đặt hàng
            </button>
          </form>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Đơn hàng của bạn</h2>
            
            <div className="space-y-4 mb-6">
              {/* Danh sách sản phẩm tóm tắt */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">CPU Intel Core i5-12400F x1</span>
                  <span className="text-gray-900">4.290.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">RAM Kingston Fury 16GB x2</span>
                  <span className="text-gray-900">3.180.000đ</span>
                </div>
              </div>

              {/* Tổng cộng */}
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính:</span>
                  <span>7.470.000đ</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Tổng cộng:</span>
                  <span className="text-[#E30019]">7.470.000đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;