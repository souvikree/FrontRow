import React, { useState } from 'react';
import axios from 'axios';

const LocationSelection = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [customCity, setCustomCity] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCustomCityChange = (event) => {
    setCustomCity(event.target.value);
    setLocation('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityToSubmit = customCity || location;
    const data = {
      name: name,
      location: cityToSubmit,
      address: address
    };
    console.log('Data to submit:', data);

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No authentication token found. Please login again.');
      return;
    }

    console.log('Token:', token); // Log token to debug

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.post('http://localhost:8000/api/theater/theaters', data, config)
      .then(response => {
        console.log('Successfully added theater:', response.data);
        setName('');
        setLocation('');
        setAddress('');
        setCustomCity('');
        setError('');
      })
      .catch(error => {
        console.error('Error adding theater:', error);
        setError('Failed to add theater. Please try again.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 rounded-lg w-full max-w-md bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center text-red-500">Register Cinema Hall</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-red-400 font-medium mb-2">
              Enter Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-red-400 font-medium mb-2">
              {name ? 'Select or Enter Location:' : 'Location:'}
            </label>
            <input
              type="text"
              id="location"
              value={customCity}
              onChange={handleCustomCityChange}
              placeholder="Enter city or select from below"
              className="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-red-400 font-medium mb-2">
              Enter Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              className="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter address"
            />
          </div>
          {error && (
            <div className="mb-4 text-red-500">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationSelection;
