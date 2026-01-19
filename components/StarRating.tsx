import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
}

export function StarRating({ rating, setRating, size = 'md', readonly = false }: StarRatingProps) {
  const [hover, setHover] = useState(0);

  const starSize = {
    sm: 'text-xs',
    md: 'text-lg',
    lg: 'text-2xl'
  }[size];

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hover || rating);
        
        return (
          <button
            key={star}
            type="button"
            className={`${starSize} transition-transform ${
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            } ${isFilled ? 'text-yellow-400' : 'text-gray-200'}`}
            onClick={() => !readonly && setRating && setRating(star)}
            onMouseEnter={() => !readonly && setHover(star)}
            onMouseLeave={() => !readonly && setHover(0)}
            disabled={readonly}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
