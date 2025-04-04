
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface QuizCompleteProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const QuizComplete: React.FC<QuizCompleteProps> = ({ score, totalQuestions, onRetry }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent work!";
    if (percentage >= 60) return "Good job!";
    if (percentage >= 40) return "Not bad!";
    return "Keep practicing!";
  };
  
  return (
    <Card className="quiz-card text-center animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Quiz Completed!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              className="text-gray-200" 
              strokeWidth="8" 
              stroke="currentColor" 
              fill="transparent" 
              r="42" 
              cx="50" 
              cy="50" 
            />
            <circle 
              className="text-indicon-navy" 
              strokeWidth="8" 
              stroke="currentColor" 
              fill="transparent" 
              r="42" 
              cx="50" 
              cy="50" 
              strokeDasharray={264}
              strokeDashoffset={264 - (percentage / 100) * 264}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{percentage}%</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{getMessage()}</h3>
        <p className="text-gray-600 mb-6">
          You scored {score} out of {totalQuestions} questions.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          onClick={onRetry} 
          className="w-full sm:w-auto bg-indicon-navy hover:bg-indicon-navy/90"
        >
          Try Again
        </Button>
        <Link to="/quizzes" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full border-indicon-navy text-indicon-navy hover:bg-indicon-navy/10">
            Back to Quizzes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizComplete;
