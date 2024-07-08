import React from 'react';

const defaultImage = 'https://i.ibb.co/4pDNDk1/avatar.png'; // Default image URL

const CastDetails = ({ movie }) => {
  const cast = movie.casts || []; // Ensure cast data is present and initialized
  const movieName = movie.name || 'Movie Name Unavailable'; // Default movie name if not available
  
  return (
    <div className="mt-8">
      <h2 className="text-white text-2xl font-bold mb-4 flex justify-start">{movieName} Cast</h2>
      <div className="flex flex-wrap gap-16 pt-4">
        {cast.length > 0 ? (
          cast.map((actor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={actor.image || defaultImage} // Use actor's image or default image if not available
                alt={actor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-white text-center font-semibold mt-2">{actor.name}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-400">No cast information available.</div>
        )}
      </div>
    </div>
  );
};

export default CastDetails;
