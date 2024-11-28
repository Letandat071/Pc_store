import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 5; // Số trang hiển thị

    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    if (start > 1) {
      pageNumbers.push(1);
      if (start > 2) pageNumbers.push('...');
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-1 md:space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-1.5 md:p-2 rounded-lg ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:text-[#E30019]'
        }`}
      >
        <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
      </button>

      <div className="hidden md:flex space-x-2">
        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-lg ${
              page === currentPage
                ? 'bg-[#E30019] text-white'
                : typeof page === 'number'
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-gray-400 cursor-default'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="md:hidden text-sm text-gray-600">
        {currentPage} / {totalPages}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-1.5 md:p-2 rounded-lg ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:text-[#E30019]'
        }`}
      >
        <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
      </button>
    </div>
  );
};

export default Pagination; 