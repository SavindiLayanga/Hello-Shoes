import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ image, name, description, price }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-amber-600">${price.toFixed(2)}</span>
          <div className="flex items-center space-x-2">
            <button 
              onClick={decreaseQuantity}
              className="p-1 rounded-full hover:bg-gray-100"
              disabled={quantity === 0}
            >
              <Minus className="h-5 w-5 text-gray-600" />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button 
              onClick={increaseQuantity}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;