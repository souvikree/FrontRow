import React, { useState, useEffect, useRef } from "react";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null); // State to track the selected date
  const [currentMonth, setCurrentMonth] = useState(""); // State to track current month
  const datesContainerRef = useRef(null); // Ref for dates container

  useEffect(() => {
    // Function to get current month and set it in state
    const getCurrentMonth = () => {
      const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
      const currentDate = new Date();
      const monthIndex = currentDate.getMonth();
      setCurrentMonth(months[monthIndex]);
    };

    getCurrentMonth();
  }, []);

  useEffect(() => {
    // Function to select today's date by default
    const currentDate = new Date().getDate().toString();
    setSelectedDate(currentDate);
  }, []);

  useEffect(() => {
    // Function to update visible dates when selectedDate changes
    updateVisibleDates();
  }, [selectedDate]);

  const updateVisibleDates = () => {
    // Generate dates for display (Current date to current date + 9)
    const currentDate = new Date().getDate(); // Get current date
    const dates = Array.from({ length: 8 }, (_, i) => currentDate + i)
      .map(date => date.toString())
      .filter(date => date <= 31); // Ensure dates are within valid month range

    // Calculate scroll position based on current date index
    const currentIndex = dates.indexOf(selectedDate);
    if (currentIndex !== -1 && datesContainerRef.current) {
      const scrollLeft = currentIndex * 100; // Adjust this based on your date item width
      datesContainerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  // Generate dates for display (Current date to current date + 9)
  const currentDate = new Date().getDate(); // Get current date
  const dates = Array.from({ length: 8 }, (_, i) => currentDate + i)
    .map(date => date.toString())
    .filter(date => date <= 31); // Ensure dates are within valid month range

  return (
    <div className="bg-black pt-10 pl-24">
      <div className="flex items-center space-x-4 overflow-hidden relative">
        <div className="flex space-x-4 overflow-x-hidden" ref={datesContainerRef}>
          {dates.map((date, index) => (
            <div
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`cursor-pointer text-lg py-2 px-4 rounded-lg font-mono font-semibold ${
                selectedDate === date ? "bg-red-500 text-white" : "bg-black text-white"
              } hover:bg-red-500 hover:text-white transition-colors duration-300`}
            >
              {date}
              <div className="text-sm font-semibold text-white">{currentMonth}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
