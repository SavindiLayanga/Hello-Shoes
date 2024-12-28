import React from 'react';
import BackButton from '../components/BackButton';

const Service = () => {
  return (
    <div className="pt-16">
      <BackButton />
      <div 
        className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <h1 className="text-5xl font-bold text-white">Our Services</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              At RESTO, we take pride in offering exceptional dining services that cater to all occasions. From intimate dinners to grand celebrations, our dedicated team ensures every detail is perfect. We specialize in private dining experiences, catering services, and special event hosting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expert chefs can create customized menus to suit your preferences and dietary requirements. We also offer professional event planning services to make your special occasions truly memorable. Whether it's a corporate lunch, wedding reception, or family gathering, we're here to exceed your expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Restaurant interior"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Catering service"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;