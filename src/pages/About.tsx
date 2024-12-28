import React from 'react';
import BackButton from '../components/BackButton';

const About = () => {
  return (
    <div className="pt-16">
      <BackButton />
      <div 
        className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <h1 className="text-5xl font-bold text-white">About Us</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
                Welcome to RESTOR, where exceptional flavors and warm hospitality meet to create an unforgettable dining experience. Nestled in the heart of Matara, we take pride in offering a menu inspired by  local ingredients, crafted by our talented chefs with a passion for fresh, high-quality ingredients. From farm-to-table specialties to signature dishes, every plate we serve tells a story of creativity and taste. Whether you're here for a casual lunch, a special dinner, or a celebration, our ambiance and attentive service promise to make each visit memorable.
            </p>
            <p className="text-gray-700 leading-relaxed">
                At RESTOR, we believe in the art of dining. Our thoughtfully designed space combines comfort with elegance, making it the perfect setting for any occasion. Alongside our expertly curated menu, we offer an extensive selection of wines and craft cocktails to elevate your experience. From the moment you walk in, our team is dedicated to making you feel at home, ensuring that every detail from the food to the service exceeds your expectations. Join us and discover why RESTOR is a cherished part of the community, known for bringing people together over delicious food and meaningful moments.
            </p>
          </div>
            <div className="grid grid-cols-2 gap-4">
                <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Restaurant interior"
                    className="w-full h-48 object-cover rounded-lg"
                />
                <img
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Signature dish"
                    className  ="w-full h-48 object-cover rounded-lg"
                />
                <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Restaurant interior"
                    className="w-full h-48 object-cover rounded-lg"
                />
                <img
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Signature dish"
                    className="w-full h-48 object-cover rounded-lg"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;