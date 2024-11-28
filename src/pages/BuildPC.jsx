import React, { useState } from 'react';
import { FaPlus, FaTrash, FaFileDownload, FaShare } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import ComponentSelectModal from '../components/build-pc/ComponentSelectModal';

const BuildPC = () => {
  const [components, setComponents] = useState({
    cpu: null,
    mainboard: null,
    ram: null,
    gpu: null,
    storage: null,
    psu: null,
    case: null,
    cooling: null
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const componentCategories = {
    cpu: {
      title: 'CPU - Bộ vi xử lý',
      icon: '🔲'
    },
    mainboard: {
      title: 'Mainboard - Bo mạch chủ',
      icon: '📟'
    },
    ram: {
      title: 'RAM - Bộ nhớ trong',
      icon: '🎮'
    },
    gpu: {
      title: 'VGA - Card màn hình',
      icon: '🖥️'
    },
    storage: {
      title: 'Ổ cứng',
      icon: '💾'
    },
    psu: {
      title: 'Nguồn máy tính',
      icon: '⚡'
    },
    case: {
      title: 'Case - Vỏ máy tính',
      icon: '🏰'
    },
    cooling: {
      title: 'Tản nhiệt',
      icon: '❄️'
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Hàm encode text tiếng Việt
    const vietText = (text) => {
      return doc.splitTextToSize(text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''), 170);
    };
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(227, 0, 25);
    doc.text('PC STORE', 20, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(33, 33, 33);
    doc.text(vietText('Cấu hình PC của bạn'), 20, 35);
    
    // Ngày xuất
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    const today = new Date().toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    doc.text(vietText(`Ngày xuất: ${today}`), 20, 45);
    
    // Vẽ line
    doc.setDrawColor(227, 0, 25);
    doc.line(20, 50, 190, 50);
    
    // Liệt kê các linh kiện
    let yPos = 60;
    Object.entries(components).forEach(([key, component]) => {
      if (component) {
        // Tên category
        doc.setFontSize(12);
        doc.setTextColor(33, 33, 33);
        doc.text(vietText(componentCategories[key].title), 20, yPos);
        
        // Tên sản phẩm
        doc.setFontSize(11);
        doc.text(vietText(component.name), 30, yPos + 7);
        
        // Giá
        doc.setTextColor(227, 0, 25);
        const price = `${component.price.toLocaleString('vi-VN')} VND`;
        doc.text(price, 150, yPos + 7);
        
        yPos += 20;
      }
    });
    
    // Tổng giá trị
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, 190, yPos);
    
    doc.setFontSize(14);
    doc.setTextColor(33, 33, 33);
    doc.text(vietText('Tổng giá trị:'), 20, yPos + 15);
    
    doc.setTextColor(227, 0, 25);
    const total = `${totalPrice.toLocaleString('vi-VN')} VND`;
    doc.text(total, 150, yPos + 15);
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(vietText('PC Store - Địa chỉ: 123 ABC, Quận X, TP.HCM'), 20, 280);
    doc.text(vietText('Hotline: 1900 1234 - Email: support@pcstore.com'), 20, 285);
    
    doc.save('pc-build-config.pdf');
  };

  const handleOpenModal = (categoryKey) => {
    setCurrentCategory(categoryKey);
    setIsModalOpen(true);
  };

  const handleSelectComponent = (component) => {
    setComponents({
      ...components,
      [currentCategory]: component
    });
    setIsModalOpen(false);
    // Cập nhật tổng giá
    const newTotal = Object.values(components).reduce(
      (sum, comp) => sum + (comp?.price || 0),
      0
    );
    setTotalPrice(newTotal);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main build area */}
        <div className="lg:w-2/3 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Xây dựng cấu hình PC</h1>
            
            {Object.entries(componentCategories).map(([key, category]) => (
              <div key={key} className="mb-4 p-4 border border-gray-200 rounded-lg hover:border-[#E30019] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{category.title}</h3>
                      {components[key] ? (
                        <p className="text-sm text-gray-600">{components[key].name}</p>
                      ) : (
                        <p className="text-sm text-gray-400">Chưa chọn linh kiện</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {components[key] && (
                      <span className="font-medium text-[#E30019]">
                        {components[key].price.toLocaleString()}đ
                      </span>
                    )}
                    <button 
                      className="p-2 text-gray-400 hover:text-[#E30019]"
                      onClick={() => handleOpenModal(key)}
                    >
                      {components[key] ? <FaTrash /> : <FaPlus />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tổng quan cấu hình</h2>
            
            <div className="space-y-3 mb-6">
              {Object.entries(components).map(([key, component]) => (
                component && (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600">{componentCategories[key].title}</span>
                    <span className="text-gray-900">{component.price.toLocaleString()}đ</span>
                  </div>
                )
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between font-bold">
                  <span>Tổng giá trị:</span>
                  <span className="text-[#E30019]">{totalPrice.toLocaleString()}đ</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={exportToPDF}
                className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2"
              >
                <FaFileDownload />
                Xuất PDF
              </button>
              
              <button
                className="w-full py-2 px-4 bg-[#E30019] text-white rounded-lg hover:bg-[#E30019]/90 flex items-center justify-center gap-2"
              >
                <FaShare />
                Chia sẻ cấu hình
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ComponentSelectModal
          category={{
            type: currentCategory,
            title: componentCategories[currentCategory].title
          }}
          selectedComponent={components[currentCategory]}
          onSelect={handleSelectComponent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default BuildPC; 