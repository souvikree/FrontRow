import React from 'react';

const defaultImage = 'path-to-your-default-image-url'; // Replace with your default image URL

const CastDetails = ({ movie }) => {
  const cast = movie.cast || []; // Assuming `cast` is an array of objects with `name` and `image`

  return (
    <div className="mt-8">
      <h2 className="text-white text-2xl font-bold mb-4 flex justify-start">Cast</h2>
      <div className="flex flex-wrap gap-16 pt-4">
        {cast.length > 0 ? (
          cast.map((actor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={actor.image || defaultImage} 
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
