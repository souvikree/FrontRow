import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import axios from "axios"; // Import Axios

// Define amPmOptions
const amPmOptions = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#1a202c", // Tailwind's gray-900
    color: "#fff",
    borderColor: "#f56565", // Tailwind's red-500
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#fff", // White background for dropdown menu
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f56565" : "#fff", // Red or white background on focus
    color: state.isFocused ? "#000" : "#1a202c", // Black or gray-900 text on focus
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff", // Set text color to white
  }),
};

const Theater = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timing, setTiming] = useState("");
  const [amPm, setAmPm] = useState(null);
  const [datesAndTimings, setDatesAndTimings] = useState([]);
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch movies
    fetchMovies();
    // Fetch theaters
    fetchTheaters();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/theater/theaters/movies"
      );
      setMovies(response.data); // Assuming data is in the format [{ value: 'id', label: 'Movie Title' }, ...]
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchTheaters = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/theater/showtheaters"
      );
      setTheaters(response.data); // Assuming data is in the format [{ value: 'id', label: 'Theater Name' }, ...]
    } catch (error) {
      console.error("Error fetching theaters:", error);
    }
  };

  const fetchMoviesByName = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/movies/name/${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching movies by name:', error);
    }
  };

  const handleMovieChange = (selectedOption) => {
    setSelectedMovie(selectedOption);
  };

  const handleTheaterChange = (selectedOption) => {
    setSelectedTheater(selectedOption);
  };

  const handleTimingChange = (e) => {
    setTiming(e.target.value);
  };

  const handleAmPmChange = (selectedOption) => {
    setAmPm(selectedOption);
  };

  const handleAddTiming = () => {
    if (timing && amPm) {
      const formattedTiming = `${timing} ${amPm.label}`;
      const updatedTimings = datesAndTimings.map((item) =>
        item.date === format(selectedDate, "yyyy-MM-dd")
          ? { ...item, times: [...item.times, formattedTiming] }
          : item
      );

      if (
        !updatedTimings.some(
          (item) => item.date === format(selectedDate, "yyyy-MM-dd")
        )
      ) {
        updatedTimings.push({
          date: format(selectedDate, "yyyy-MM-dd"),
          times: [formattedTiming],
        });
      }

      setDatesAndTimings(updatedTimings);
      setTiming("");
      setAmPm(null);
      console.log(`Added timing: ${formattedTiming}`);
      console.log("Updated Dates and Timings:", updatedTimings);
    }
  };

  const handleLaunchMovie = () => {
    if (selectedMovie && selectedTheater) {
      alert(
        `Launching ${selectedMovie.label} at ${
          selectedTheater.label
        } with showtimes: ${JSON.stringify(datesAndTimings, null, 2)}`
      );
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMoviesByName();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="p-8 rounded-t w-full max-w-lg bg-gray-100 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">
          Select a Movie and a Theater
        </h1>
        <div>
          <Select
            value={selectedMovie}
            onChange={handleMovieChange}
            options={searchQuery ? searchResults : movies}
            className="mb-4"
            placeholder="Search for a movie..."
            styles={customStyles}
            onInputChange={(value) => setSearchQuery(value)}
          />
          <Select
            value={selectedTheater}
            onChange={handleTheaterChange}
            options={theaters}
            className="mb-4"
            placeholder="Search for a theater..."
            styles={customStyles}
          />
        </div>
      </div>
      {selectedMovie && selectedTheater && (
        <div className="p-8 rounded-b w-full max-w-lg bg-gray-900 text-white">
          <div className="mb-4">
            <label className="block text-white mb-2">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="p-2 rounded bg-gray-700 text-white w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Add Timing:</label>
            <div className="flex items-center">
              <input
                type="text"
                value={timing}
                onChange={handleTimingChange}
                className="p-2 rounded bg-gray-700 text-white w-full mr-2"
                placeholder="Enter time (e.g., 10:00)"
              />
              <Select
                value={amPm}
                onChange={handleAmPmChange}
                options={amPmOptions}
                className="w-24"
                placeholder="AM/PM"
                styles={customStyles}
              />
            </div>
            <button
              onClick={handleAddTiming}
              className="mt-2 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-800 transition duration-200 w-full"
            >
              Add Timing
            </button>
          </div>
          {datesAndTimings.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl mb-2">{item.date}</h3>
              <div className="flex flex-wrap">
                {item.times.map((time, i) => (
                  <span
                    key={i}
                    className="mr-4 mb-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-full"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleLaunchMovie}
            className="mt-4 inline-block w-full py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-200"
          >
            Launch Movie
          </button>
        </div>
      )}
    </div>
  );
};

export default Theater;
