import React, { useState, useEffect, useRef } from 'react';

const DateSelector = ({ setSelectedDate }) => {
  const [selectedDate, setLocalSelectedDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const datesContainerRef = useRef(null);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateDates = (startDate) => {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    const dates = [];
    let day = startDate.getDate();
    let month = startDate.getMonth();
    let year = startDate.getFullYear();

    for (let i = 0; i < 7; i++) {
      const daysInCurrentMonth = getDaysInMonth(month, year);
      if (day > daysInCurrentMonth) {
        day = 1;
        month++;
        if (month > 11) {
          month = 0;
          year++;
        }
      }
      dates.push({ date: day, month, year });
      day++;
    }

    return dates.map((date) => ({
      ...date,
      monthName: months[date.month],
      formattedDate: `${date.year}-${String(date.month + 1).padStart(2, '0')}-${String(date.date).padStart(2, '0')}`
    }));
  };

  const updateVisibleDates = () => {
    const currentDate = new Date();
    const dates = generateDates(currentDate);

    const currentIndex = dates.findIndex((date) => date.formattedDate === selectedDate);
    if (currentIndex !== -1 && datesContainerRef.current) {
      const scrollLeft = currentIndex * 100;
      datesContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const currentFormattedDate = new Date().toISOString().split('T')[0];
    setLocalSelectedDate(currentFormattedDate);
    setSelectedDate(currentFormattedDate); 
    updateVisibleDates();
  }, []);

  useEffect(() => {
    updateVisibleDates();
  }, [selectedDate]);

  const currentDate = new Date();
  const dates = generateDates(currentDate);

  const handleDateClick = (date) => {
    setLocalSelectedDate(date.formattedDate);
    setSelectedDate(date.formattedDate);
  };

  return (
    <div className="bg-black">
      <div className="flex items-center space-x-4 overflow-hidden relative">
        <div className="flex space-x-4 overflow-x-hidden" ref={datesContainerRef}>
          {dates.map((dateObj, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(dateObj)}
              className={`cursor-pointer text-lg py-2 px-4 rounded-lg font-mono font-semibold ${
                selectedDate === dateObj.formattedDate ? 'bg-red-500 text-white' : 'bg-black text-white'
              } hover:bg-red-500 hover:text-white transition-colors duration-300`}
            >
              {dateObj.date}
              <div className="text-sm font-semibold text-white">{dateObj.monthName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
