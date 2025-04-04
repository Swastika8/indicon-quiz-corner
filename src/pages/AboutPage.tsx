
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indicon-navy">About INDICON Quiz Corner</h1>
          
          <Card className="mb-8 shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-indicon-navy">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                INDICON Quiz Corner is dedicated to helping UPSC aspirants master the Indian Constitution 
                through interactive learning. We believe that understanding the Constitution is not just 
                about memorizing articles, but about comprehending the principles and values that form the 
                foundation of our democracy.
              </p>
              <p className="text-gray-700">
                Our approach combines concise study materials with targeted quizzes designed to reinforce 
                key concepts and prepare you for the rigorous demands of civil service examinations.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4 text-indicon-navy">Our Approach</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-indicon-saffron flex items-center justify-center text-white text-sm mr-3 mt-1">1</div>
                    <div>
                      <h3 className="font-semibold">Read</h3>
                      <p className="text-gray-600 text-sm">Comprehensive yet concise study material</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white border border-indicon-navy flex items-center justify-center text-indicon-navy text-sm mr-3 mt-1">2</div>
                    <div>
                      <h3 className="font-semibold">Quiz</h3>
                      <p className="text-gray-600 text-sm">Test your understanding with targeted questions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-indicon-green flex items-center justify-center text-white text-sm mr-3 mt-1">3</div>
                    <div>
                      <h3 className="font-semibold">Learn</h3>
                      <p className="text-gray-600 text-sm">Detailed explanations for every answer</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-indicon-navy flex items-center justify-center text-white text-sm mr-3 mt-1">4</div>
                    <div>
                      <h3 className="font-semibold">Master</h3>
                      <p className="text-gray-600 text-sm">Revisit topics to solidify your knowledge</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4 text-indicon-navy">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indicon-navy mr-2">✓</span>
                    <p className="text-gray-700"><span className="font-semibold">UPSC-focused content</span> - Tailored specifically for civil service examinations</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indicon-navy mr-2">✓</span>
                    <p className="text-gray-700"><span className="font-semibold">Conceptual clarity</span> - Focus on understanding rather than rote memorization</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indicon-navy mr-2">✓</span>
                    <p className="text-gray-700"><span className="font-semibold">Comprehensive coverage</span> - From Preamble to Amendments</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indicon-navy mr-2">✓</span>
                    <p className="text-gray-700"><span className="font-semibold">Regular updates</span> - Stay current with the latest constitutional developments</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-indicon-navy">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                We're constantly working to improve our platform and expand our content. If you have any suggestions,
                feedback, or questions, please don't hesitate to reach out to us.
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:contact@indiconquiz.com" className="text-indicon-navy hover:underline">contact@indiconquiz.com</a>
              </p>
            </CardContent>
          </Card>
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

export default AboutPage;
