
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ReadingSection from '@/components/ReadingSection';
import QuizQuestion from '@/components/QuizQuestion';
import QuizComplete from '@/components/QuizComplete';
import { quizzes } from '@/data/quizData';
import { Card } from '@/components/ui/card';

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  
  const [quiz, setQuiz] = useState(quizzes.find(q => q.id === quizId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showReading, setShowReading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  useEffect(() => {
    if (!quiz) {
      navigate('/quizzes');
    }
  }, [quiz, navigate]);
  
  if (!quiz) {
    return null;
  }
  
  const handleNextQuestion = () => {
    // Check if we've answered all questions
    if (currentQuestionIndex === quiz.questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowReading(true);
    setQuizCompleted(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-indicon-navy">{quiz.title}</h1>
            <p className="text-gray-600">{quiz.description}</p>
          </div>
          
          {showReading ? (
            <div className="animate-fade-in">
              <ReadingSection 
                title="Study Material"
                content={quiz.readingContent}
              />
              
              <div className="text-center">
                <button
                  onClick={() => setShowReading(false)}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indicon-navy hover:bg-indicon-navy/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indicon-navy"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          ) : quizCompleted ? (
            <QuizComplete 
              score={score}
              totalQuestions={quiz.questions.length}
              onRetry={handleRetry}
            />
          ) : (
            <QuizQuestion
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={quiz.questions.length}
              question={quiz.questions[currentQuestionIndex].text}
              options={quiz.questions[currentQuestionIndex].options}
              explanation={quiz.questions[currentQuestionIndex].explanation}
              onNext={() => {
                const isCorrect = quiz.questions[currentQuestionIndex].options.find(
                  option => option.isCorrect
                )?.isCorrect;
                
                if (isCorrect) {
                  setScore(prev => prev + 1);
                }
                
                handleNextQuestion();
              }}
            />
          )}
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

export default QuizPage;
