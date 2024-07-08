import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { FaFilm, FaMoneyBillWave } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './LoadingSpinner';

const LeftNavbar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    // Simulate logout process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Your account is logged out');
      navigate('/');
    }, 2000); 
  };

  return (
    <div>
      <ToastContainer />
      {isLoading && <LoadingSpinner />}
      <aside className="fixed inset-y-5 left-2 bg-gray-800 shadow-md max-h-screen w-40 top-16 rounded-2xl">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow p-4">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex bg-white items-center hover:bg-orange-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  <AiFillHome className="text-xl mr-4" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex hover:bg-orange-200 rounded-xl font-bold text-sm text-yellow-300 py-3 px-4 hover:text-yellow-950"
                >
                  <FaFilm className="text-xl mr-4" />
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex hover:bg-orange-200 rounded-xl font-bold text-sm text-yellow-300 py-3 px-4 hover:text-yellow-950"
                >
                  <FaMoneyBillWave className="text-xl mr-4" />
                  Earn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex bg-red-400 hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                >
                  <CiSettings className="text-xl mr-4" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button
              type="button"
              onClick={handleLogout}
              className={`inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              <MdLogout className="mr-2" /> 
              {isLoading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LeftNavbar;
