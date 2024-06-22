import React, { useState, useEffect } from 'react';
import seatImage from "../assets/screen.png"; 

const SeatSelect = ({ selectedSeats, onClose }) => {
  const [selected, setSelected] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0); // State to track selected seats count
  const [totalSum, setTotalSum] = useState(0); // State to track total sum of selected seats

  // Define seat prices
  const goldSeatPrice = 200;
  const silverSeatPrice = 100;

  // Dummy seat data - replace with your actual seat arrangement logic
  const seats = Array.from({ length: 160 }, (_, index) => 160 - index);

  // Define the maximum number of columns
  const maxColumns = 20;

  // Divide seats into gold and regular sections
  const goldSeats = seats.slice(0, maxColumns * 2); // First 40 seats for gold section
  const regularSeats = seats.slice(maxColumns * 2); // Remaining seats for regular section

  // Handle click on a seat
  const handleSeatClick = (seatNumber, seatPrice) => {
    if (selected.includes(seatNumber)) {
      setSelected(selected.filter((seat) => seat !== seatNumber));
      setTotalSum(totalSum - seatPrice);
    } else {
      setSelected([...selected, seatNumber]);
      setTotalSum(totalSum + seatPrice);
    }
  };

  // Update selected seats count when selected state changes
  useEffect(() => {
    setSelectedCount(selected.length);
  }, [selected]);

  // Handle confirmation of seat selection
  const handleConfirmSelection = () => {
    // Here you can perform further actions, such as submitting data or closing the modal
    console.log("Selected Seats Count:", selectedCount);
    onClose(); // Close the modal or perform other actions after confirmation
  };

  return (
    <div className="relative p-4 bg-black text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 mt-4">Select Your Seats</h1>
      <p className="mb-4">You can select {selectedSeats} seat(s)</p>

      {/* Gold Seats Section */}
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

      {/* Silver Seats Section */}
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

      <img src={seatImage} alt="FrontRow Screen" className="mt-1 w-80 mb-6 " style={{ maxWidth: '100%', height: 'auto' }} />

      {/* Display selected seats count and Confirm Selection button */}
      <div className="fixed bottom-4 left-4 right-4 ml-80 mr-80 bg-white p-4 border border-gray-300 rounded-lg flex justify-between items-center">
        <div>
          
          
          <span className="font-semibold text-black">Total: Rs. {totalSum}</span>
        </div>
        <button
          onClick={handleConfirmSelection}
          className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-red-700 ${selectedCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={selectedCount === 0}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default SeatSelect;
