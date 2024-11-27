import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center w-full max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-[#E30019]">404</h1>
        
        <div className="space-y-2 mb-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Oops! Trang không tồn tại
          </h2>
          <p className="text-gray-600">
            Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
          </p>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-[#E30019] text-white px-6 py-3 rounded-lg hover:bg-[#E30019]/90 transition duration-300"
        >
          <FaHome className="text-white"/>
          <span>Về Trang Chủ</span>
        </Link>

        <div className="mt-8">
          <img 
            src="https://imgur.com/kZ2OXuM.png" 
            alt="404 Illustration" 
            className="w-1/3 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300 animate-bounce"
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound