import React, { useState } from 'react';
import MovieCard1 from './MovieCard1';  
import HoverCard from './HoverCard';    

const MovieCardContainer = ({ poster }) => {
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
        poster={poster}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && (
        <div className="absolute top-0 left-0 z-10">
          <HoverCard poster={poster} />
        </div>
      )}
    </div>
  );
}

export default MovieCardContainer;
