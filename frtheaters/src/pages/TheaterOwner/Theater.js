import React, { useState } from 'react';
import Select from 'react-select';

const movies = [
  { value: '1', label: 'Inception' },
  { value: '2', label: 'Interstellar' },
  { value: '3', label: 'The Dark Knight' },
  { value: '4', label: 'Pulp Fiction' },
  // Add more movies here
];

const theaters = [
  { value: '1', label: 'AMC Theaters' },
  { value: '2', label: 'Regal Cinemas' },
  { value: '3', label: 'Cinemark Theaters' },
  { value: '4', label: 'Alamo Drafthouse' },
  // Add more theaters here
];

const Theater = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);

  const handleMovieChange = (selectedOption) => {
    setSelectedMovie(selectedOption);
  };

  const handleTheaterChange = (selectedOption) => {
    setSelectedTheater(selectedOption);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-6">Select a Movie and a Theater</h1>
        <Select
          value={selectedMovie}
          onChange={handleMovieChange}
          options={movies}
          className="mb-4"
          placeholder="Search for a movie..."
        />
        <Select
          value={selectedTheater}
          onChange={handleTheaterChange}
          options={theaters}
          className="mb-4"
          placeholder="Search for a theater..."
        />
       
      </div>
    </div>
  );
};

export default Theater;
