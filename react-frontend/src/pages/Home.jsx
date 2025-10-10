import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to React + Vite + Tailwind
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        A modern React application built with Vite and Tailwind CSS
      </p>
      <div className="space-x-4">
        <Link to="/login" className="btn-primary">
          Get Started
        </Link>
        <Link to="/register" className="btn-secondary">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Home;