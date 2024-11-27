import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const isLoggedIn = false;
  const navigate = useNavigate();

  const categories = {
    'Linh kiện máy tính': [
      'CPU - Bộ vi xử lý',
      'Mainboard - Bo mạch chủ',
      'RAM - Bộ nhớ trong',
      'VGA - Card màn hình',
      'PSU - Nguồn máy tính',
      'Case - Vỏ máy tính'
    ],
    'Laptop theo hãng': [
      'Laptop ASUS',
      'Laptop Dell',
      'Laptop HP',
      'Laptop Lenovo',
      'Laptop Acer',
      'Laptop MSI'
    ],
    'PC - Máy tính để bàn': [
      'PC Gaming',
      'PC Văn phòng',
      'PC Đồ họa',
      'PC All in One',
      'PC Mini'
    ],
    'Thiết bị ngoại vi': [
      'Màn hình máy tính',
      'Bàn phím',
      'Chuột gaming',
      'Tai nghe',
      'Webcam'
    ]
  };

  const handleAuthClick = () => {
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      {/* Top bar */}
      <div className="bg-[#E30019] text-white py-1 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>Hotline: 1900 1234 | Email: support@pcstore.com</p>
            <div className="hidden md:flex space-x-4">
              <Link to="/tracking">Tra cứu đơn hàng</Link>
              <Link to="/support">Hỗ trợ kỹ thuật</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://imgur.com/kZ2OXuM.png" alt="Logo" className="h-8 w-auto" />
            <span className="ml-2 text-2xl font-bold text-[#E30019]">PC STORE</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-[#E30019]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <FaSearch className="text-gray-400 hover:text-[#E30019]" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="text-gray-700 hover:text-[#E30019] relative">
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#E30019] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            
            {isLoggedIn ? (
              <Link to="/profile" className="text-gray-700 hover:text-[#E30019]">
                <FaUser className="h-6 w-6" />
              </Link>
            ) : (
              <button 
                onClick={handleAuthClick}
                className="bg-[#E30019] text-white px-4 py-2 rounded-lg hover:bg-[#E30019]/90"
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category menu */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-2">
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-[#E30019]"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <FaBars />
                <span>Danh mục sản phẩm</span>
              </button>
              
              {/* Mega menu */}
              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6 grid grid-cols-4 gap-6">
                  {Object.entries(categories).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item}>
                            <Link 
                              to={`/category/${item.toLowerCase()}`}
                              className="text-gray-600 hover:text-[#E30019] text-sm"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/build-pc" className="text-gray-700 hover:text-[#E30019]">Xây dựng cấu hình</Link>
            <Link to="/promotion" className="text-gray-700 hover:text-[#E30019]">Khuyến mãi</Link>
            <Link to="/news" className="text-gray-700 hover:text-[#E30019]">Tin tức</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-[#E30019]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <FaSearch className="text-gray-400 hover:text-[#E30019]" />
              </button>
            </div>

            {/* Mobile categories */}
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                <ul className="space-y-2 pl-4">
                  {items.map((item) => (
                    <li key={item}>
                      <Link 
                        to={`/category/${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-[#E30019] text-sm"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Mobile navigation links */}
            <div className="space-y-4 border-t border-gray-200 pt-4">
              <Link to="/build-pc" className="block text-gray-700 hover:text-[#E30019]">Xây dựng cấu hình</Link>
              <Link to="/promotion" className="block text-gray-700 hover:text-[#E30019]">Khuyến mãi</Link>
              <Link to="/news" className="block text-gray-700 hover:text-[#E30019]">Tin tức</Link>
              <Link to="/tracking" className="block text-gray-700 hover:text-[#E30019]">Tra cứu đơn hàng</Link>
              <Link to="/support" className="block text-gray-700 hover:text-[#E30019]">Hỗ trợ kỹ thuật</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;