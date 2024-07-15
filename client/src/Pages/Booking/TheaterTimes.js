import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SeatCounter from './SeatCounter';
import DateSelector from './DateSelector';

const TheaterTimes = () => {
  const { state } = useLocation();
  const { movie } = state;
  const navigate = useNavigate();

  const [theaters, setTheaters] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchTheatersAndShowtimes = async () => {
      if (!selectedDate) return;

      try {
        setIsLoading(true);
        const response = await axios.get(`https://frontrow-fy8v.onrender.com/api/movies/${movie._id}/showtimes`, {
          params: { date: selectedDate },
          headers: { 'Cache-Control': 'no-cache' },
        });

        setTheaters(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching theaters and showtimes:', error);
        setError('Failed to fetch theaters and showtimes. Please try again.');
        setIsLoading(false);
        setTheaters([]);
      }
    };

    fetchTheatersAndShowtimes();
  }, [movie._id, selectedDate]);

  const handleTimeClick = (theaterIndex, timeIndex) => {
    setSelectedTime({ theaterIndex, timeIndex });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProceed = (selectedSeats, totalSum) => {
    if (!selectedTime) {
      console.error('No time selected.');
      return;
    }

    const theater = theaters[selectedTime.theaterIndex];
    const showtime = theater.dates[selectedTime.timeIndex];

    navigate(`/confirmation`, {
      state: { movie, theater: theater.theater.name, showtime, selectedSeats, totalSum },
    });
  };

  return (
    <div className="p-6 bg-black pt-16 pl-24">
      <DateSelector setSelectedDate={setSelectedDate} />
      {isLoading ? (
        <p className="text-white">Loading theaters and showtimes...</p>
      ) : error ? (
        <p className="text-white">Error: {error}</p>
      ) : theaters.length > 0 ? (
        theaters.map((theater, theaterIndex) => (
          <div key={theater.theater._id} className="mb-8 mt-6 opacity-70 p-4 rounded-lg bg-gray-800/80">
            <h2 className="text-xl font-bold text-white mb-4 flex justify-start">{theater.theater.name}</h2>
            <div className="flex gap-4 flex-wrap mt-6">
              {theater.dates.map((showtime, timeIndex) => (
                <div
                  key={timeIndex}
                  onClick={() => handleTimeClick(theaterIndex, timeIndex)}
                  className={`p-2  rounded-lg shadow-md transition-colors duration-200 font-semibold ${
                    selectedTime &&
                    selectedTime.theaterIndex === theaterIndex &&
                    selectedTime.timeIndex === timeIndex
                      ? 'bg-red-500 text-white'
                      : 'bg-white'
                  }`}
                >
                  {showtime.times} 
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No theaters found.</p>
      )}
      <SeatCounter isOpen={isModalOpen} onClose={closeModal} onProceed={handleProceed} />
    </div>
  );
};

export default TheaterTimes;
