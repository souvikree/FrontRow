import React, { useState } from 'react';
import MovieCard1 from './MovieCard1';  // Adjust the import path as needed
import HoverCard from './HoverCard';    // Adjust the import path as needed

const MovieCardContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <MovieCard1 
        posterurl="https://example.com/poster.jpg"  // Replace with actual poster URL
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && (
        <div className="absolute top-0 left-0">
          <HoverCard />
        </div>
      )}
    </div>
  );
}

export default MovieCardContainer;
