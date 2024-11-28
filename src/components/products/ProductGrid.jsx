import React from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductGrid = ({ filters, sortBy, category, currentPage, onPageChange }) => {
  // Thêm các thuộc tính mới cho sản phẩm mẫu
  const products = Array(12).fill().map((_, index) => ({
    id: index + 1,
    name: `${['ROG Strix G15', 'MSI Raider GE76', 'Alienware x15 R2', 'Razer Blade 15'][index % 4]} ${index + 1}`,
    price: Math.floor(Math.random() * (50000000 - 10000000) + 10000000),
    oldPrice: Math.floor(Math.random() * (60000000 - 50000000) + 50000000),
    discount: [10, 15, 20, 25][index % 4],
    image: `https://picsum.photos/400/300?random=${index}`,
    brand: ['ROG', 'MSI', 'Alienware', 'Razer'][index % 4],
    specs: {
      cpu: ['AMD Ryzen 9 7945HX', 'Intel Core i9-13980HX', 'Intel Core i7-13700H', 'AMD Ryzen 7 7745H'][index % 4],
      ram: ['32GB DDR5', '64GB DDR5', '16GB DDR5', '32GB DDR5'][index % 4],
      gpu: ['RTX 4090 16GB', 'RTX 4080 12GB', 'RTX 4070 8GB', 'RTX 4060 8GB'][index % 4]
    },
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    tags: ['Best Seller', 'New Arrival', 'Editor Choice'][index % 3]
  }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default ProductGrid; 