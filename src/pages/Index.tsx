
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indicon-navy">
              Master the Indian Constitution
              <span className="text-indicon-saffron"> One Quiz </span>
              at a Time
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Interactive quizzes designed specifically for UPSC aspirants to understand and 
              remember constitutional concepts effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quizzes">
                <Button className="bg-indicon-navy hover:bg-indicon-navy/90 text-white px-8 py-6 text-lg">
                  Start Learning
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-indicon-navy text-indicon-navy hover:bg-indicon-navy/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indicon-saffron via-white to-indicon-green opacity-20 rounded-lg"></div>
              <Card className="shadow-lg p-8 backdrop-blur-sm max-w-md">
                <div className="text-center mb-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-indicon-saffron via-white to-indicon-green mx-auto mb-4"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-indicon-navy flex items-center justify-center text-white text-sm">1</div>
                    <div>
                      <h3 className="font-semibold">Conceptual Learning</h3>
                      <p className="text-gray-600 text-sm">Read and understand before testing your knowledge</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-indicon-navy flex items-center justify-center text-white text-sm">2</div>
                    <div>
                      <h3 className="font-semibold">Detailed Explanations</h3>
                      <p className="text-gray-600 text-sm">Learn from detailed answer explanations</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-indicon-navy flex items-center justify-center text-white text-sm">3</div>
                    <div>
                      <h3 className="font-semibold">UPSC-Focused</h3>
                      <p className="text-gray-600 text-sm">Content specifically tailored for civil service exams</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-indicon-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 INDICON Quiz Corner. All rights reserved.</p>
          <p className="text-sm mt-2">Designed for UPSC aspirants to master the Indian Constitution.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
