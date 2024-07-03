import React, { useState } from 'react';

const LocationSelection = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [mallName, setMallName] = useState('');

  const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'WestBengal'];
  const cities = {
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Delhi: ['New Delhi'],
    Karnataka: ['Bangalore', 'Mysore'],
    TamilNadu: ['Chennai', 'Coimbatore'],
    WestBengal: ['Kolkata', 'Siliguri']
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
    setMallName('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setMallName('');
  };

  const handleMallNameChange = (event) => {
    setMallName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected State: ${selectedState}, City: ${selectedCity}, Mall: ${mallName}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-8 rounded-lg w-full max-w-md bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center text-red-500">Register Cinema Hall</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="state" className="block text-red-400 font-medium mb-2">
              Select State:
            </label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              className="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="" disabled>
                Choose a state
              </option>
              {states.map((state) => (
                <option key={state} value={state} className="bg-gray-700 text-white">
                  {state}
                </option>
              ))}
            </select>
          </div>
          {selectedState && (
            <div className="mb-6">
              <label htmlFor="city" className="block text-red-400 font-medium mb-2">
                Select City:
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
                className="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="" disabled>
                  Choose a city
                </option>
                {cities[selectedState].map((city) => (
                  <option key={city} value={city} className="bg-gray-700 text-white">
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedCity && (
            <div className="mb-6">
              <label htmlFor="mallName" className="block text-red-400 font-medium mb-2">
                Enter Mall Name:
              </label>
              <input
                type="text"
                id="mallName"
                value={mallName}
                onChange={handleMallNameChange}
                className="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter mall name"
              />
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
