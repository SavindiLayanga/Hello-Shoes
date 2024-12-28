import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Footprints } from 'lucide-react';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex items-center justify-center mb-6">
          <Footprints className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold ml-2">Hello Shoes</h1>
        </div>
        
        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
            {message}
          </div>
        )}

        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 text-sm font-medium ${
                !isSignUp
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 text-sm font-medium ${
                isSignUp
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {isSignUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  );
};

export default Login;