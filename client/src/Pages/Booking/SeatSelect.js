import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import seatImage from "../assets/screen.png"; 

import Confirmation from './Confirmation';

const SeatSelect = () => {
  const [selected, setSelected] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false); // State to control the confirmation modal
  const navigate = useNavigate();
  const location = useLocation();

  const totalSeats = location.state && location.state.totalSeats ? location.state.totalSeats : 0;

  const goldSeatPrice = 200;
  const silverSeatPrice = 100;

  const seats = Array.from({ length: 160 }, (_, index) => 160 - index);
  const maxColumns = 20;
  const goldSeats = seats.slice(0, maxColumns * 2);
  const regularSeats = seats.slice(maxColumns * 2);

  const handleSeatClick = (seatNumber, seatPrice) => {
    if (selected.includes(seatNumber)) {
      setSelected(selected.filter((seat) => seat !== seatNumber));
      setTotalSum(totalSum - seatPrice);
    } else {
      if (selected.length < totalSeats) {
        setSelected([...selected, seatNumber]);
        setTotalSum(totalSum + seatPrice);
      }
    }
  };

  useEffect(() => {
    setSelectedCount(selected.length);
  }, [selected]);

  const handleConfirmSelection = () => {
    if (selected.length === totalSeats) {
      setShowConfirmation(true); // Show the confirmation modal
    } else {
      alert(`Please select exactly ${totalSeats} seat(s)!`);
    }
  };

  const handleCloseModal = () => {
    setShowConfirmation(false); // Close the confirmation modal
  };

  return (
    <div className="relative p-4 mt-14 bg-black text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 mt-4">Select Your Seats</h1>
      <p className="mb-4">You can select {totalSeats} seat(s)</p>

      <div>
        <h2 className="text-sm font-bold text-yellow-500 mb-1 mt-4 flex">Gold Seats - Rs. {goldSeatPrice}</h2>
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
                onClick={() => handleSeatClick(seat, goldSeatPrice)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold text-gray-400 mb-1 mt-6 flex">Silver Seats - Rs. {silverSeatPrice}</h2>
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
                onClick={() => handleSeatClick(seat, silverSeatPrice)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img src={seatImage} alt="FrontRow Screen" className="mt-1 w-80 mb-6" style={{ maxWidth: '100%', height: 'auto' }} />

      <div className="fixed bottom-4 left-4 right-4 ml-80 mr-80 bg-white p-4 border border-gray-300 rounded-lg flex justify-between items-center">
        <div>
          <span className="font-semibold text-black">Total: Rs. {totalSum}</span>
        </div>
        <button
          onClick={handleConfirmSelection}
          className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-red-700 ${selectedCount === 0 && selected.length !== totalSeats ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={selectedCount === 0 && selected.length !== totalSeats}
        >
          Confirm Selection
        </button>
      </div>

      {showConfirmation && (
        <Confirmation
          selectedSeats={selected}
          totalSum={totalSum}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SeatSelect;
