import React, { useState } from 'react';
import Modal from './Modal';
import img3 from '../assets/popup.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';

const SeatCounter = ({ isOpen, onClose }) => {
  const [totalSeats, setTotalSeats] = useState(0);
  const navigate = useNavigate();

  const increaseSeats = () => {
    if (totalSeats < 10) {
      setTotalSeats(totalSeats + 1);
    } else {
      toast.error('Seat limit reached!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const decreaseSeats = () => {
    if (totalSeats > 0) {
      setTotalSeats(totalSeats - 1);
    }
  };

  const handleSelectSeats = () => {
    if (totalSeats > 0) {
      navigate('/selectseats');
    } else {
      toast.error('Please select at least one seat!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4 bg-white flex flex-col items-center relative">
        <ToastContainer /> {/* ToastContainer component for notifications */}
        {/* Close button (cross) */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-lg text-black font-bold mb-4">How many Seats?</h1>
        <div className="mb-2 mt-2">
          <img src={img3} className="w-auto h-72" alt="Popup" />
        </div>

        <div className="flex items-center mt-4">
          <button
            onClick={decreaseSeats}
            className="bg-blue-400 text-white px-4 py-2 rounded-l hover:bg-blue-700"
          >
            -
          </button>
          <span className="px-4">{totalSeats}</span>
          <button
            onClick={increaseSeats}
            className="bg-blue-400 text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            +
          </button>
        </div>
        <div className="flex flex-wrap gap-10 mt-4">
          <div>
            <p className="text-sm text-yellow-400">GOLD</p>
            <p className="font-semibold text-sm">Rs. 200</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">SILVER</p>
            <p className="font-semibold text-sm">Rs. 100</p>
          </div>
        </div>
        <button
          onClick={handleSelectSeats}
          className="bg-red-600 text-white px-6 py-2 mt-4 rounded"
        >
          <h2>Select Seats</h2>
        </button>
      </div>
    </Modal>
  );
};

export default SeatCounter;
