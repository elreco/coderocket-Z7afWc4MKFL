import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        
        // Full star
        if (starValue <= rating) {
          return (
            <Star 
              key={index}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          );
        }
        
        // Half star
        if (starValue - 0.5 <= rating) {
          return (
            <div key={index} className="relative w-5 h-5">
              <Star className="absolute w-5 h-5 text-gray-300" />
              <div className="absolute overflow-hidden w-[50%]">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        }
        
        // Empty star
        return (
          <Star 
            key={index}
            className="w-5 h-5 text-gray-300"
          />
        );
      })}
    </div>
  );
}