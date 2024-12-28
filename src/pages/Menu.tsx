import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import MenuItem from '../components/MenuItem';
import { menuItems } from '../data/menuItems';

const menuCategories = [
  'Rice', 'Soup', 'Ramen', 'Sandwich', 'Pizza', 'Burger', 'Pasta', 
  'Short Eats', 'Ice Cream', 'Desserts', 'Beverages'
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Rice');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16">
      <BackButton />
      <div 
        className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`
        }}
      >
        <h1 className="text-5xl font-bold text-white">{activeCategory}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;