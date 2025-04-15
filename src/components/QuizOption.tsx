
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  id: string;
  text: string;
  isSelected: boolean;
  isCorrect?: boolean;
  isRevealed: boolean;
  onSelect: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  id,
  text,
  isSelected,
  isCorrect,
  isRevealed,
  onSelect,
}) => {
  const getStatusClasses = () => {
    if (!isRevealed) {
      return isSelected ? 'border-indicon-navy bg-indicon-navy/10' : 'hover:bg-gray-50';
    }
    
    if (isCorrect) {
      return 'border-green-500 bg-green-50';
    }
    
    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-50';
    }
    
    return '';
  };

  return (
    <div
      className={cn(
        'quiz-option flex items-center p-3 border rounded-lg transition-colors cursor-pointer',
        getStatusClasses()
      )}
      onClick={!isRevealed ? onSelect : undefined}
    >
      <div className="mr-3 flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
        {isSelected && !isRevealed && (
          <div className="w-3 h-3 rounded-full bg-indicon-navy"></div>
        )}
        {isRevealed && isCorrect && (
          <Check className="w-4 h-4 text-green-500" />
        )}
        {isRevealed && isSelected && !isCorrect && (
          <X className="w-4 h-4 text-red-500" />
        )}
      </div>
      <div className="flex-grow">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default QuizOption;
