
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuizOption from './QuizOption';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: Option[];
  explanation: string;
  onNext: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  explanation,
  onNext,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    if (!isRevealed) {
      setSelectedOptionId(optionId);
    }
  };

  const handleCheckAnswer = () => {
    setIsRevealed(true);
  };

  const handleNext = () => {
    const isCorrect = isAnswerCorrect();
    onNext(isCorrect);
    setSelectedOptionId(null);
    setIsRevealed(false);
  };

  const isAnswerCorrect = () => {
    if (!selectedOptionId || !isRevealed) return false;
    const selectedOption = options.find(option => option.id === selectedOptionId);
    return selectedOption?.isCorrect || false;
  };

  return (
    <Card className="quiz-card mb-6">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="quiz-progress w-1/2">
            <div 
              className="quiz-progress-bar" 
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        <CardTitle className="text-xl font-semibold">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {options.map((option) => (
            <QuizOption
              key={option.id}
              id={option.id}
              text={option.text}
              isSelected={selectedOptionId === option.id}
              isCorrect={option.isCorrect}
              isRevealed={isRevealed}
              onSelect={() => handleOptionSelect(option.id)}
            />
          ))}
        </div>

        {isRevealed && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-indicon-navy mb-2">
              {isAnswerCorrect() ? '✓ Correct!' : '✗ Incorrect'}
            </h4>
            <p className="text-gray-700">{explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isRevealed ? (
          <Button 
            onClick={handleCheckAnswer} 
            disabled={!selectedOptionId}
            className="w-full bg-indicon-navy hover:bg-indicon-navy/90"
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext} 
            className="w-full bg-indicon-saffron hover:bg-indicon-saffron/90 text-white"
          >
            Next Question
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizQuestion;
