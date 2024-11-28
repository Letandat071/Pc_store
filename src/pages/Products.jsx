import React, { useState, useEffect } from 'react';
import { FaThList, FaThLarge, FaFilter, FaTimes } from 'react-icons/fa';
import ProductGrid from '../components/products/ProductGrid';
import ProductList from '../components/products/ProductList';
import FilterSidebar from '../components/products/FilterSidebar';
import SortDropdown from '../components/products/SortDropdown';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { categorySlug } = useParams();
  
  const [viewMode, setViewMode] = useState('grid'); // 'grid' hoặc 'list'
  const [filters, setFilters] = useState({
    brands: [],
    chipTypes: [],
    chipBrands: [],
    ramSizes: [],
    vgaBrands: [],
    priceRange: [0, 50000000]
  });

  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Số sản phẩm trên mỗi trang
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    if (categorySlug) {
      const formattedCategory = categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setCurrentCategory(formattedCategory);
      
      setCurrentPage(1);
    } else {
      setCurrentCategory(null);
    }
  }, [categorySlug]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile filter button */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm"
        >
          <FaFilter className="text-[#E30019]" />
          <span>Lọc sản phẩm</span>
        </button>
        
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Drawer for Mobile */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ${
            isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsFilterOpen(false)}
        >
          <div
            className={`fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white transform transition-transform duration-300 ${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Bộ lọc</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:text-[#E30019]"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-4">
                <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block md:w-1/4">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Main content */}
        <div className="md:w-3/4">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'text-[#E30019]' : 'text-gray-400'}`}
                >
                  <FaThLarge size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'text-[#E30019]' : 'text-gray-400'}`}
                >
                  <FaThList size={20} />
                </button>
              </div>
              <span className="text-gray-600 text-sm">
                Hiển thị 24 trên 100 sản phẩm
              </span>
            </div>

            <div className="hidden md:block">
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          {/* Products */}
          {viewMode === 'grid' ? (
            <ProductGrid 
              filters={filters} 
              sortBy={sortBy}
              category={currentCategory}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          ) : (
            <ProductList 
              filters={filters} 
              sortBy={sortBy}
              category={currentCategory}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products; 