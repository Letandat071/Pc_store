import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGift, FaClock, FaArrowRight, FaFire, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Promotion = () => {
  const navigate = useNavigate();

  // State cho countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  // State để track slide hiện tại
  const [currentSlide, setCurrentSlide] = useState(0);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Data mẫu cho vouchers PC
  const pcVouchers = [
    { 
      minSpend: 30, // 30 triệu
      benefits: [
        'Giảm ngay 2 triệu',
        'Tặng RAM 16GB DDR5',
        'Tặng Gaming Chair',
        'Miễn phí cài đặt'
      ]
    },
    {
      minSpend: 50,
      benefits: [
        'Giảm ngay 5 triệu',
        'Tặng RAM 32GB RGB',
        'Tặng Gaming Chair + Bàn',
        'Windows 11 Pro bản quyền'
      ]
    },
    {
      minSpend: 80,
      benefits: [
        'Giảm ngay 8 triệu',
        'Tặng RAM 64GB RGB',
        'Tặng Full Gaming Setup',
        'Bảo hành 3 năm tận nơi'
      ]
    }
  ];

  // Data mẫu cho flash sale (16 sản phẩm)
  const flashSaleProducts = [
    {
      id: 1,
      name: 'RTX 4070 Ti Gaming X Trio',
      originalPrice: 22990000,
      salePrice: 19990000,
      image: 'https://product.hstatic.net/1000026716/product/msi-geforce-rtx-4070-ti-gaming-x-trio-12g_9c6db12506d24b1a9f6c667f392c8728.jpg',
      remainingQty: 5,
      soldQty: 15
    },
    {
      id: 2,
      name: 'Màn hình ASUS ROG Swift 360Hz',
      originalPrice: 18990000,
      salePrice: 15990000,
      image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
      remainingQty: 3,
      soldQty: 17
    },
    {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      {
        id: 2,
        name: 'Màn hình ASUS ROG Swift 360Hz',
        originalPrice: 18990000,
        salePrice: 15990000,
        image: 'https://www.asus.com/us/wp-content/uploads/2022/09/ROG-Swift-360Hz-1.png',
        remainingQty: 3,
        soldQty: 17
      },
      
    // ... thêm 14 sản phẩm khác để đủ 16
  ];

  // Chia sản phẩm thành các slides, mỗi slide 8 sản phẩm (4x2)
  const slides = [
    flashSaleProducts.slice(0, 8),  // 8 sản phẩm đầu
    flashSaleProducts.slice(8, 16)  // 8 sản phẩm sau
  ];

  // Data mẫu cho combo khuyến mãi
  const promoSets = [
    {
      title: 'Gaming PC Starter',
      products: [
        { name: 'Core i5 13400F', type: 'CPU' },
        { name: 'RTX 4060 Gaming X', type: 'GPU' },
        { name: '32GB DDR5 6000MHz', type: 'RAM' }
      ],
      freeProducts: [
        'Chuột Gaming Logitech G502',
        'Bàn phím cơ RK68',
        'Tai nghe Gaming Corsair HS55'
      ],
      price: 25990000,
      salePrice: 22990000
    },
    {
      title: 'Gaming PC Pro',
      products: [
        { name: 'Core i7 13700K', type: 'CPU' },
        { name: 'RTX 4070 Ti', type: 'GPU' },
        { name: '64GB DDR5 6400MHz', type: 'RAM' }
      ],
      freeProducts: [
        'Bộ Gaming Gear Logitech G Pro',
        'Ghế Gaming Corsair T3',
        'Màn hình Gaming 27" 240Hz'
      ],
      price: 45990000,
      salePrice: 39990000
    }
    
  ];

  // Data mẫu cho sản phẩm khuyến mãi theo ngày
  const dailyDeals = [
    {
      id: 1,
      name: 'Laptop Gaming MSI Katana GF66',
      specs: [
        'Intel Core i7-12700H',
        'RTX 3060 6GB',
        'RAM 16GB DDR5',
        'SSD 1TB NVMe'
      ],
      originalPrice: 32990000,
      salePrice: 27990000,
      image: 'https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2023/07/laptop-gaming-msi-katana.jpg',
      date: '2023-11-20'
    },
    {
      id: 2,
      name: 'PC Gaming ROG Strix G15',
      specs: [
        'AMD Ryzen 9 7900X',
        'RTX 4080 16GB',
        'RAM 32GB DDR5',
        'SSD 2TB NVMe'
      ],
      originalPrice: 52990000,
      salePrice: 45990000,
      image: 'https://dlcdnwebimgs.asus.com/gain/9890C08A-F675-4E50-BC77-A4C1F68CEC80',
      date: '2023-11-21'
    },
   
   
  ];

  // Hàm xử lý cho nút CTA chính
  const handleExploreClick = () => {
    // Cuộn xuống section Flash Sale
    document.querySelector('#flash-sale')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Hàm xử lý cho voucher PC
  const handleVoucherClick = (minSpend) => {
    navigate(`/build-pc?budget=${minSpend}`);
    // Hoặc mở modal
    // setShowVoucherModal(true);
    // setSelectedVoucher(minSpend);
  };

  // Hàm xử lý mua flash sale
  const handleFlashSaleBuy = (product) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        isFlashSale: true,
        salePrice: product.salePrice 
      }
    });
  };

  // Hàm xử lý mua combo
  const handleComboBuy = (set) => {
    navigate('/cart/checkout', {
      state: {
        type: 'combo',
        items: set.products,
        freeProducts: set.freeProducts,
        totalPrice: set.salePrice
      }
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Banner */}
      <div 
        className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-4452.jpg?t=st=1732805178~exp=1732808778~hmac=49705cfc47266758dd6f9b0ca9061604467487adf3e312c5630565f73e108589&w=1380')"
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/100 to-transparent w-[70%] left-[0%]">
          <div className="container mx-auto px-8 md:px-12 h-full flex flex-col justify-center">
            <div className="w-full md:w-2/3 space-y-6">
              {/* Tag line */}
              <div className="inline-block bg-[#E30019] text-white px-4 py-2 rounded-lg text-sm font-medium">
                BLACK FRIDAY 2023
              </div>
              
              {/* Main title */}
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  CHỜ ĐÓN THÁNG 11
                </h1>
                
                <h2 className="text-2xl md:text-4xl text-[#E30019] font-bold">
                  NGÀN DEAL GIẢM SỐC
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg text-white/80 max-w-2xl pt-2">
                Cơ hội săn deal khủng với ưu đãi lên đến 50% cho tất cả sản phẩm Gaming Gear. 
                Đặc biệt tặng thêm voucher 500K cho đơn hàng từ 5 triệu.
              </p>

              {/* Countdown timer */}
              <div className="pt-4">
                <p className="text-white/90 text-sm mb-3 font-medium">
                  Thời gian còn lại:
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </span>
                    <span className="block text-[11px] mt-1 font-medium uppercase tracking-wider text-white/80">
                      Giờ
                    </span>
                  </div>
                  <span className="text-white text-4xl font-light">:</span>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </span>
                    <span className="block text-[11px] mt-1 font-medium uppercase tracking-wider text-white/80">
                      Phút
                    </span>
                  </div>
                  <span className="text-white text-4xl font-light">:</span>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </span>
                    <span className="block text-[11px] mt-1 font-medium uppercase tracking-wider text-white/80">
                      Giây
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={handleExploreClick}
                className="mt-8 bg-[#E30019] hover:bg-[#E30019]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Khám phá ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        {/* PC Special Offers Section */}
        <div className="bg-gradient-to-b from-[#f83939] to-[#530000] py-16 mt-[-2px]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3 mb-4">
                <FaGift className="text-2xl" />
                ƯU ĐÃI ĐẶC BIỆT KHI MUA PC
              </h2>
              <p className="text-white/80 text-lg">
                Chọn gói ưu đãi phù hợp với ngân sách của bạn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pcVouchers.map((voucher, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
                  {/* Header với giá trị tối thiểu */}
                  <div className="bg-gradient-to-r from-[#E30019] to-[#CC0017] py-4 px-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {voucher.minSpend}+ TRIỆU
                    </h3>
                    <p className="text-white/80 text-sm">Giá trị đơn hàng</p>
                  </div>

                  {/* Benefits list */}
                  <div className="p-6 space-y-4">
                    {voucher.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="text-[#E30019] mt-1">
                          <FaFire />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="p-6 pt-0">
                    <button 
                      onClick={() => handleVoucherClick(voucher.minSpend)}
                      className="w-full bg-[#E30019] text-white py-3 rounded-lg font-medium hover:bg-[#CC0017] transition-colors"
                    >
                      Khám phá ngay
                    </button>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#E30019]/10 rounded-bl-full transform translate-x-1/2 -translate-y-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flash Sale Section */}
        <div id="flash-sale" className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FaFire className="text-[#E30019]" />
                FLASH SALE HÔM NAY
              </h2>
              <div className="flex items-center gap-6">
                <div className="text-[#E30019] font-medium text-xl">
                  Kết thúc trong: {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === 0 ? 'bg-[#E30019]' : 'bg-gray-300'
                    }`}
                  />
                  <button 
                    onClick={() => setCurrentSlide(1)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === 1 ? 'bg-[#E30019]' : 'bg-gray-300'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Nút điều hướng */}
              <button 
                onClick={() => setCurrentSlide(prev => (prev === 0 ? 1 : 0))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 z-10"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              
              <button 
                onClick={() => setCurrentSlide(prev => (prev === 0 ? 1 : 0))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 z-10"
              >
                <FaChevronRight className="text-gray-600" />
              </button>

              {/* Container cho slides */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slideProducts, slideIndex) => (
                    <div 
                      key={slideIndex}
                      className="min-w-full"
                    >
                      <div className="grid grid-cols-4 gap-4"> {/* 4 cột */}
                        {slideProducts.map((product) => (
                          <div key={product.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[#E30019] font-bold text-xl">
                                {product.salePrice.toLocaleString()}đ
                              </span>
                              <span className="text-gray-500 line-through text-sm">
                                {product.originalPrice.toLocaleString()}đ
                              </span>
                            </div>
                            <div className="bg-gray-100 rounded-full h-2 mb-2">
                              <div 
                                className="bg-[#E30019] h-full rounded-full"
                                style={{ width: `${(product.soldQty / (product.soldQty + product.remainingQty)) * 100}%` }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 mb-4">
                              Còn lại: {product.remainingQty} sản phẩm
                            </div>
                            <button
                              onClick={() => handleFlashSaleBuy(product)}
                              className="w-full bg-[#E30019] text-white px-6 py-2 rounded-lg hover:bg-[#E30019]/90 transition-colors"
                            >
                              Mua ngay
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combo Section - Nền đỏ */}
        <div className="bg-[#E30019]/95 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
              <FaGift className="text-white" />
              COMBO KHUYẾN MÃI ĐẶC BIỆT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {promoSets.map((set, index) => (
                <div key={index} className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{set.title}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {set.products.map((product, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-sm text-gray-500">{product.type}</div>
                          <div className="font-medium">{product.name}</div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="font-medium text-gray-700 mb-2">Quà tặng kèm:</div>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {set.freeProducts.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[#E30019] font-bold text-2xl">
                          {set.salePrice.toLocaleString()}đ
                        </span>
                        <span className="text-gray-500 line-through ml-2">
                          {set.price.toLocaleString()}đ
                        </span>
                      </div>
                      <button
                        onClick={() => handleComboBuy(set)}
                        className="bg-[#E30019] text-white px-6 py-2 rounded-lg hover:bg-[#E30019]/90 transition-colors"
                      >
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Deals Section - Nền trắng */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FaClock className="text-[#E30019]" />
              KHUYẾN MÃI THEO NGÀY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dailyDeals.map((deal) => (
                <div key={deal.id} className="border rounded-lg p-6 flex gap-6">
                  <img 
                    src={deal.image} 
                    alt={deal.name} 
                    className="w-1/3 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{deal.name}</h3>
                    <div className="space-y-2 mb-4">
                      {deal.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <FaArrowRight className="text-[#E30019] text-sm" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#E30019] font-bold text-2xl">
                        {deal.salePrice.toLocaleString()}đ
                      </span>
                      <span className="text-gray-500 line-through">
                        {deal.originalPrice.toLocaleString()}đ
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Áp dụng ngày: {new Date(deal.date).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion; 