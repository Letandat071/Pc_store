import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({ value, onChange }) => {
  const formatPrice = (price) => {
    return `${price.toLocaleString()}đ`;
  };

  return (
    <div className="px-2">
      <Slider
        range
        min={0}
        max={50000000}
        step={1000000}
        value={value}
        onChange={onChange}
        className="my-4"
        trackStyle={[{ backgroundColor: '#E30019' }]}
        handleStyle={[
          { backgroundColor: '#E30019', borderColor: '#E30019' },
          { backgroundColor: '#E30019', borderColor: '#E30019' }
        ]}
        railStyle={{ backgroundColor: '#e5e7eb' }}
      />
      
      <div className="flex justify-between text-sm text-gray-600">
        <span>{formatPrice(value[0])}</span>
        <span>{formatPrice(value[1])}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider; 