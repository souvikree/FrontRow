// CastDetails.js
import React from 'react';

const defaultCast = {
    id: 0,
    cast1: "Unknown",
    cast1Img: "",
    cast2: "Unknown",
    cast2Img: "",
    cast3: "Unknown",
    cast3Img: "",
};

const CastDetails = ({ movie }) => {
    const cast = [
        { name: movie.cast1 || defaultCast.cast1, image: movie.cast1Img || defaultCast.cast1Img },
        { name: movie.cast2 || defaultCast.cast2, image: movie.cast2Img || defaultCast.cast2Img },
        { name: movie.cast3 || defaultCast.cast3, image: movie.cast3Img || defaultCast.cast3Img },
    ];

    return (
        <div className="mt-8">
            <h2 className="text-white text-2xl font-bold mb-4 flex justify-start">Cast</h2>
            <div className="flex flex-wrap gap-16 pt-4">
                {cast.map((actor, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={actor.image} alt={actor.name} className="w-24 h-24 rounded-full object-cover" />
                        <div className="text-white text-center font-semibold mt-2">{actor.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CastDetails;
