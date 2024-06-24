import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faMoneyBillWave, faFilm } from '@fortawesome/free-solid-svg-icons';

const GST_RATE = 0.18;

const Confirmation = ({ selectedSeats, totalSum, onClose }) => {
  const navigate = useNavigate();

  const gstAmount = totalSum * GST_RATE;
  const totalAmount = totalSum + gstAmount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
        <div className="mb-4">
          <p className="flex items-center font-bold">
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Total Seats : {selectedSeats.length}
          </p>
        </div>
        <div className="mb-4">
          <p className="flex items-center font-bold">
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Selected Seats : {selectedSeats.join(', ')}
          </p>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="font-bold">Amount :</p>
            <p>Rs. {totalSum.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">GST ({(GST_RATE * 100).toFixed(2)}%) :</p>
            <p>Rs. {gstAmount.toFixed(2)}</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 mb-4">
          <p className="text-xl font-bold flex justify-between">
            <span>Total Amount (incl. GST):</span>
            <span>Rs. {totalAmount.toFixed(2)}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate('/payment', { state: { totalAmount, selectedSeats } })}
            className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900 focus:outline-none"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
