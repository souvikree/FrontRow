import React, { useState } from 'react';
import SeatCounter from './SeatCounter';

const TheaterTimes = () => {
  const theaters = [
    {
      name: "Acropolis Mall",
      showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    },
    {
      name: "LakeMall",
      showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    },
    {
      name: "RDB Cinemas",
      showtimes: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
    },
  ];

  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTimeClick = (theaterIndex, timeIndex) => {
    setSelectedTime({ theaterIndex, timeIndex });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-black pl-24 pt-10">
      {theaters.map((theater, theaterIndex) => (
        <div key={theaterIndex} className="mb-8 opacity-70 p-4 rounded-lg bg-gray-800/80">
          <h2 className="text-xl font-bold text-white mb-4 flex justify-start">{theater.name}</h2>
          <div className="flex gap-4 flex-wrap mt-6">
            {theater.showtimes.map((time, timeIndex) => (
              <div
                key={timeIndex}
                onClick={() => handleTimeClick(theaterIndex, timeIndex)}
                className={`p-2 rounded-lg shadow-md transition-colors duration-200 font-semibold ${
                  selectedTime &&
                  selectedTime.theaterIndex === theaterIndex &&
                  selectedTime.timeIndex === timeIndex
                    ? 'bg-red-500 text-white'
                    : 'bg-white'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      ))}
      <SeatCounter isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TheaterTimes;
