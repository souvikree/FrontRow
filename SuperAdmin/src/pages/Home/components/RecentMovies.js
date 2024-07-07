import React from "react";
const RecentMovies = ({ movies }) => {
  return (
    <div>
      <div className="bg-slate-800 px-3 rounded-2xl py-4">
        <h2 className="text-2xl font-bold mb-4 text-slate-50 mt-1">
          Recent Movies
        </h2>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {movies.map((movie, index) => (
            <div key={index} className=" bg-black border rounded-xl text-gray-800 flex mr-3">
              <img src={movie.poster} alt={movie.name} className="w-40 h-20 object-cover rounded-xl" />
              <div className="text-md font-bold text-white ml-4">
                {movie.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentMovies;
