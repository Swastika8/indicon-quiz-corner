
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
}

const difficultyColors = {
  easy: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  hard: 'bg-red-100 text-red-800'
};

const QuizCard: React.FC<QuizCardProps> = ({ 
  id, 
  title, 
  description, 
  questionCount, 
  difficulty, 
  estimatedTime 
}) => {
  return (
    <Card className="quiz-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{questionCount} questions</span>
          <span>{estimatedTime}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/quiz/${id}`} className="w-full">
          <Button className="w-full bg-indicon-navy hover:bg-indicon-navy/90">
            Start Quiz
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
