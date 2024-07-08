import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MovieCardContainer = ({ id, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="relative" onClick={handleClick}>
      <div className="relative">
        <img
          src={image}
          alt="Movie Poster"
          className="h-[200px] w-[150px] rounded-xl overflow-hidden mb-6 group cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {isHovered && (
          <div className="absolute top-0 left-0 z-10">
          {/* <HoverCard image={image} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCardContainer;
