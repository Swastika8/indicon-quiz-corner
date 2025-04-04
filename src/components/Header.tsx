
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center">
            <span className="w-2 h-8 bg-indicon-saffron mr-1"></span>
            <span className="w-2 h-8 bg-white mr-1 border border-gray-200"></span>
            <span className="w-2 h-8 bg-indicon-green mr-3"></span>
          </div>
          <Link to="/" className="text-2xl font-bold text-indicon-navy">
            INDICON
            <span className="text-indicon-saffron">Quiz</span>
            <span className="text-xs ml-1 text-gray-500">Corner</span>
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indicon-navy font-medium transition-colors">
            Home
          </Link>
          <Link to="/quizzes" className="text-gray-700 hover:text-indicon-navy font-medium transition-colors">
            Quizzes
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-indicon-navy font-medium transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
