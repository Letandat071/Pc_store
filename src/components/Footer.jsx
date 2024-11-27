import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-[#E30019]/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Thông tin công ty */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Chuyên cung cấp các linh kiện máy tính, laptop chính hãng với giá tốt nhất thị trường
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0276ED]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0276ED]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0276ED]">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0276ED]">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-[#E30019]">Sản phẩm</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#E30019]">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-600 hover:text-[#E30019]">Chính sách</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 hover:text-[#E30019]">Bảo hành</Link>
              </li>
            </ul>
          </div>

          {/* Danh mục sản phẩm */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Danh Mục</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/cpu" className="text-gray-600 hover:text-[#E30019]">CPU</Link>
              </li>
              <li>
                <Link to="/category/mainboard" className="text-gray-600 hover:text-[#E30019]">Mainboard</Link>
              </li>
              <li>
                <Link to="/category/ram" className="text-gray-600 hover:text-[#E30019]">RAM</Link>
              </li>
              <li>
                <Link to="/category/gpu" className="text-gray-600 hover:text-[#E30019]">Card đồ họa</Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Liên Hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#E30019]" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#E30019]" />
                <span>support@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#E30019]" />
                <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© 2024 Computer Store. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer