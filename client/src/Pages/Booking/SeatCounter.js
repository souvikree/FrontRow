import React, { useState } from "react";
import Modal from "./Modal";
import img3 from "../assets/popup.jpeg";

const SeatCounter = () => {
  const [totalSeats, setTotalSeats] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const increaseSeats = () => {
    if(totalSeats<10){
        setTotalSeats(totalSeats + 1);
    }
    else
       alert("limit reached!");
    
  };

  const decreaseSeats = () => {
    if (totalSeats > 0) {
      setTotalSeats(totalSeats - 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      
        <div className="bg-red-600 text-white px-6 py-2 rounded"
        onClick={openModal}></div>
      
        
    
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-4 bg-white flex flex-col items-center">
          <h1 className="text-lg text-black font-bold mb-4">How many Seats?</h1>
          
          <div className="mb-2 mt-2">
          <img src={img3} className="w-auto h-72"></img>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-500 text-white px-5 py-3 rounded-full"
              onClick={decreaseSeats}
            >
              -
            </button>
            
            <h2 className="text-black font-bold">{totalSeats}</h2>
            <button
              className="bg-blue-500 text-white px-5 py-3 rounded-full"
              onClick={increaseSeats}
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
                <p className="text-sm text-grey">SILVER</p>
                <p className="font-semibold text-sm">Rs. 100</p>
            </div>
            
          </div>

          <p><button className="bg-red-600 text-white px-6 py-2 mt-4 rounded">
             <h2>Select Seats</h2>
             </button>
            </p>
        </div>
      </Modal>
    </div>
  );
};

export default SeatCounter;
