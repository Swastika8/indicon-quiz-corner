
import React from 'react';
import Header from '@/components/Header';
import QuizCard from '@/components/QuizCard';
import { quizzes } from '@/data/quizData';

const QuizzesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-indicon-navy">Constitution Quizzes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a topic below to start learning. Each quiz begins with a reading section,
            followed by interactive questions to test your understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              id={quiz.id}
              title={quiz.title}
              description={quiz.description}
              questionCount={quiz.questions.length}
              difficulty={quiz.difficulty}
              estimatedTime={quiz.estimatedTime}
            />
          ))}
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

export default QuizzesPage;
