import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'

const Header = () => {
  // Giả sử chúng ta có một state để kiểm tra đăng nhập
  const isLoggedIn = false; // Sau này sẽ lấy từ global state (Redux/Context)
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate('/login');
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 border-b border-[#E30019]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://imgur.com/kZ2OXuM.png" alt="Logo" className="h-8 w-auto animate-bounce" />
            <pan className="ml-2 text-2xl font-bold text-[#E30019]">PC STORE</pan>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#E30019] font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-[#0276ED]/90 font-medium transition-colors duration-200">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#0276ED]/90 font-medium transition-colors duration-200">
              About Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-1 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-[#E30019] text-gray-700 placeholder-gray-400"
            />
            <FaSearch className="absolute right-3 text-gray-400 hover:text-[#E30019] cursor-pointer" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
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
                className="bg-[#E30019] text-white px-4 py-2 rounded-lg hover:bg-[#E30019]/90 transition duration-300 font-medium"
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header