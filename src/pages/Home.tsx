import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const foodCategories = [
  {
    title: "All types of local food in of our country",
    description: "Traditional dishes passed down through generations, seasonal specialties made with fresh, locally-sourced ingredients. Our menu features fresh vegetables, artisan cheeses, and meats that highlight the flavors of the region crafted according to traditional recipes. Each hearty comfort foods and street-style snacks, fine dining is served up to the plate.",
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "All types of food in rural and urban of our country",
    description: "A variety of non-alcoholic options to suit your preferences and occasion include water, soft drinks, juices, coffee, tea and for alcoholic drinkers, a range of beers, wines and cocktails are offered, as well as smoothies, milkshakes or specialty drinks to suit your meal or theme.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Enjoy Drinks & Snacks at the Bar",
    description: "A variety of non-alcoholic options to suit your preferences and occasion include water, soft drinks, juices, coffee, tea and for alcoholic cocktails are offered, as well as smoothies, milkshakes or specialty drinks to suit your meal or theme.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <h1 className="text-6xl font-bold text-white mb-8 text-center">
          WELCOME TO RESTO
        </h1>
        <Link
          to="/reserve"
          className="bg-amber-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-amber-700 transition-colors"
        >
          Reserve a Table
        </Link>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Pasta dish"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Chef preparing food"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold tracking-wider">
                <span className="block">OUR</span>
                <span className="block">STORY</span>
              </h2>
              <h3 className="text-xl text-red-600 font-semibold">About Us</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Welcome to RESTOR, where exceptional flavors and warm hospitality meet to create an unforgettable dining experience. Nestled in the heart of Matara, we take pride in offering a menu inspired by local ingredients, crafted by our talented chefs with a passion for fresh, high-quality ingredients. From farm-to-table specialties to signature dishes, every plate we serve tells a story of creativity and taste.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At RESTOR, we believe in the art of dining. Our thoughtfully designed space combines comfort with elegance, making it the perfect setting for any occasion. Alongside our expertly curated menu, we offer an extensive selection of wines and craft cocktails to elevate your experience. From the moment you walk in, our team is dedicated to making you feel at home, ensuring that every detail from the food to the service exceeds your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Food Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose your best foods from Categories</h2>
        <div className="space-y-12">
          {foodCategories.map((category, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
                <Link
                  to="/menu"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700"
                >
                  <span className="mr-2">View Menu</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;