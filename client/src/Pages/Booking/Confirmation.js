// Confirmation.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Movielist from '../Data/Movielist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faMoneyBillWave, faFilm } from '@fortawesome/free-solid-svg-icons';

const GST_RATE = 0.18;

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, totalSum, movieName } = location.state || {};

  // Find the selected movie from the Movielist
  const selectedMovie = Movielist.find(movie => movie.name === movieName);

  // Calculate GST and total amount
  const gstAmount = totalSum * GST_RATE;
  const totalAmount = totalSum + gstAmount;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Booking Confirmation</h1>
          {/* Movie Details Section */}
          {selectedMovie && (
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <img src={selectedMovie.poster} alt={selectedMovie.name} className="w-32 h-48 rounded-lg" />
                <div className="ml-6">
                  <h2 className="text-2xl font-bold">{selectedMovie.name}</h2>
                  <p className="text-lg text-gray-300">{selectedMovie.genre}</p>
                  <p className="text-lg text-gray-300">{selectedMovie.duration} mins</p>
                </div>
              </div>
              <hr className="border-gray-700 my-6" />
            </div>
          )}

          {/* Booking Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <div className="text-gray-300 mb-4">
              <p className="flex items-center font-bold"><FontAwesomeIcon icon={faTicketAlt} className="mr-2" /> Total Seats : {selectedSeats ? selectedSeats.length : 0}</p>
            </div>
            <div className="text-gray-300 mb-4">
              <p className="flex items-center font-bold"><FontAwesomeIcon icon={faTicketAlt} className="mr-2" /> Selected Seats : {selectedSeats && selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
            </div>
            <div className="mb-4">
              <div className="text-gray-300 flex justify-between">
                <p className="flex items-center font-bold"><FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" /> Amount :</p>
                <p className="font-bold"> Rs. {totalSum.toFixed(2)}</p>
              </div>
              <div className="text-gray-300 flex justify-between">
                <p className="flex items-center font-bold"><FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" /> GST ({(GST_RATE * 100).toFixed(2)}%) :</p>
                <p className="font-bold">Rs. {gstAmount.toFixed(2)}</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-xl font-bold mt-4 flex items-center"><FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" /> Total Amount (incl. GST): Rs. {totalAmount.toFixed(2)}</p>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <button
            onClick={() => navigate('/payment', { state: { totalAmount, movieName, selectedSeats } })}
            className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-8 w-full"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      
      
      <div className="fixed top-4 left-4">
        <FontAwesomeIcon icon={faFilm} size="3x" className="text-gray-500 animate-pulse" />
      </div>
    </div>
  );
};

export default Confirmation;
