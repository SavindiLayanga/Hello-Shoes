import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-24 left-4 flex items-center text-gray-700 hover:text-amber-600"
    >
      <ArrowLeft className="h-6 w-6 mr-1" />
      <span>Back to Home</span>
    </button>
  );
};

export default BackButton;