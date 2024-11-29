import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map các đường dẫn sang tiếng Việt
  const pathMap = {
    'cart': 'Giỏ hàng',
    'checkout': 'Thanh toán',
    'products': 'Sản phẩm',
    'about': 'Về chúng tôi',
    'category': 'Danh mục',
    'cpu': 'CPU',
    'mainboard': 'Mainboard',
    'ram': 'RAM',
    'gpu': 'Card đồ họa',
    'login': 'Đăng nhập',
    'register': 'Đăng ký',
    'build-pc': 'Xây cấu hình',
    'promotion': 'Khuyến mãi',
    'news': 'Tin tức'
  };

  return (
    <nav className="bg-white border-b border-[#E30019]/30">
      <ol className="flex items-center space-x-2 text-sm h-10 md:h-12 px-4">
        <li>
          <Link to="/" className="text-gray-600 hover:text-[#E30019] flex items-center">
            <FaHome className="w-4 h-4" />
          </Link>
        </li>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <React.Fragment key={name}>
              <li>
                <FaChevronRight className="w-3 h-3 text-gray-400" />
              </li>
              <li>
                {isLast ? (
                  <span className="text-[#E30019] font-medium">
                    {pathMap[name] || name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-[#E30019]"
                  >
                    {pathMap[name] || name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;