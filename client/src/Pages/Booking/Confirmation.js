// Confirmation.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Movielist from '../Data/Movielist';

const GST_RATE = 0.18;

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, totalSum, movieName } = location.state || {};

  const selectedMovie = Movielist.find(movie => movie.name === movieName);

  const gstAmount = totalSum * GST_RATE;
  const totalAmount = totalSum + gstAmount;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Confirmation Page</h1>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <div className="text-gray-300 mb-4">
              <p className="font-bold mr-2">Total Seats : {selectedSeats ? selectedSeats.length : 0}</p>
            </div>
            <div className="text-gray-300 mb-4">
              <p className="font-bold">Selected Seats : {selectedSeats && selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
            </div>
            <div className="mb-4">
              <div className="text-gray-300 flex justify-between">
                <p className="font-bold pl-36 pt-10">Amount : </p>
                <p className="font-bold pr-36 pt-10"> Rs. {totalSum.toFixed(2)}</p>
              </div>
              <div className="text-gray-300 flex justify-between">
                <p className="font-bold pl-36 pt-10">GST ({(GST_RATE * 100).toFixed(2)}%) : </p>
                <p className="font-bold pr-36 pt-10">Rs. {gstAmount.toFixed(2)}</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-xl font-bold mt-4">Total Amount (incl. GST): Rs. {totalAmount.toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/payment', { state: { totalAmount, movieName, selectedSeats } })}
            className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-8 w-full"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
