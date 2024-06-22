import React, { useState } from 'react';
import seatImage from '../assets/screen1.png'; // Import your image file

const SeatSelect = ({ selectedSeats, onClose }) => {
  const [selected, setSelected] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selected.includes(seatNumber)) {
      setSelected(selected.filter((seat) => seat !== seatNumber));
    } else {
      setSelected([...selected, seatNumber]);
    }
  };

  const totalSeats = selectedSeats || 0;

  // Dummy seat data - replace with your actual seat arrangement logic
  const seats = Array.from({ length: 160 }, (_, index) => index + 1);

  // Define the maximum number of columns
  const maxColumns = 20;

  // Divide seats into gold and regular sections
  const goldSeats = seats.slice(0, maxColumns * 2);
  const regularSeats = seats.slice(maxColumns * 2);

  return (
    <div className="relative p-4 bg-black text-white flex flex-col items-center">
      <button onClick={onClose} className="absolute top-4 right-4 bg-red-600 text-white px-6 py-2 rounded mt-8 mr-44">
        Confirm Selection
      </button>
      <h1 className="text-2xl font-bold mb-4 mt-4">Select Your Seats</h1>
      <p className="mb-4">You can select {totalSeats} seat(s)</p>

      {/* Gold Seats Section */}
      <div>
        <h2 className="text-sm font-bold text-yellow-500 mb-1 mt-4">Gold Seats - Rs. 200</h2>
        <div className="w-full border-t-2 border-yellow-500 pt-2">
          <div
            className="grid gap-3 mt-4"
            style={{
              gridTemplateColumns: `repeat(${Math.min(goldSeats.length, maxColumns)}, minmax(0, 1fr))`
            }}
          >
            {goldSeats.map((seat) => (
              <div
                key={seat}
                className={`p-2 text-center rounded cursor-pointer w-10 h-10 ${
                  selected.includes(seat) ? 'bg-green-500 text-white' : 'bg-gray-800'
                }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Silver Seats Section */}
      <div>
        <h2 className="text-sm font-bold  text-gray-400 mb-1 mt-6">Silver Seats - Rs. 100</h2>
        <div className="w-full border-t-2 border-gray-400 pt-2">
          <div
            className="grid gap-3 mt-4"
            style={{
              gridTemplateColumns: `repeat(${Math.min(regularSeats.length, maxColumns)}, minmax(0, 1fr))`
            }}
          >
            {regularSeats.map((seat) => (
              <div
                key={seat}
                className={`p-2 text-center rounded cursor-pointer w-10 h-10 ${
                  selected.includes(seat) ? 'bg-green-500 text-white' : 'bg-gray-800'
                }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BookMyShow Screen Image */}
      <img src={seatImage} alt="BookMyShow Screen" className="mt-1 w-80 mb-6 " style={{ maxWidth: '100%', height: 'auto' }} />

    
    </div>
  );
};

export default SeatSelect;
