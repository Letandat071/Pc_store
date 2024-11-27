import React from 'react'
import { FaCheckCircle, FaUsers, FaAward, FaTrophy } from 'react-icons/fa'

const About = () => {
  const stats = [
    {
      icon: <FaUsers className="w-8 h-8 text-[#E30019]" />,
      number: "10,000+",
      label: "Khách hàng tin tưởng"
    },
    {
      icon: <FaAward className="w-8 h-8 text-[#E30019]" />,
      number: "5+",
      label: "Năm kinh nghiệm"
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-[#E30019]" />,
      number: "50+",
      label: "Giải thưởng"
    }
  ];

  const features = [
    "Sản phẩm chính hãng 100%",
    "Đội ngũ tư vấn chuyên nghiệm",
    "Chính sách bảo hành tốt nhất",
    "Giao hàng toàn quốc"
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Về Computer Store
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi tự hào là đơn vị cung cấp các sản phẩm công nghệ chính hãng hàng đầu tại Việt Nam
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="About Us" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Tại sao chọn Computer Store?
            </h2>
            <p className="text-gray-600">
              Computer Store được thành lập với sứ mệnh mang đến cho khách hàng những sản phẩm công nghệ 
              chất lượng cao với giá cả hợp lý nhất.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-[#E30019]" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#E30019] text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bạn cần tư vấn?
          </h2>
          <p className="mb-6">
            Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
          <button className="bg-white text-[#E30019] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default About 