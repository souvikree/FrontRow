import React from 'react';
import Dashboard from './Dashboard';
import AdminTopBar from './AdminTopBar';

const AdminHome = () => {
  return (
    <div>
      <AdminTopBar />
      <Dashboard />
      <div className="p-4 sm:ml-64 mt-12">
        <div>
          <div className="grid mt-10 mx-24 grid-cols-3 gap-16 mb-4">
            <div className="flex flex-col justify-between h-[210px] w-[380px] rounded-[8px] bg-gradient-to-br from-[#000E29] to-[#1C415E] p-4">
              <div className="flex justify-between items-start">
                <div className="text-2xl font-bold text-gray-100">
                  Earning
                </div>
                <div className="text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 1v22M1 12h22"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-semibold text-gray-100 flex-grow flex items-center justify-center ">
              ₹12340
              </div>
            </div>
            <div className="flex flex-col justify-between h-[210px] w-[380px] rounded-[8px] bg-gradient-to-br from-[#000E29] to-[#1C415E] p-4">
              <div className="flex justify-between items-start">
                <div className="text-2xl font-bold text-gray-100">
                  Available Movies
                </div>
                <div className="text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 1v22M1 12h22"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-semibold text-gray-100 flex-grow flex items-center justify-center">
                16
              </div>
            </div>
            <div className="flex flex-col justify-between h-[210px] w-[380px] rounded-[8px] bg-gradient-to-br from-[#000E29] to-[#1C415E] p-4">
              <div className="flex justify-between items-start">
                <div className="text-2xl font-bold text-gray-100">
                  Ticket Booked
                </div>
                <div className="text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 1v22M1 12h22"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-semibold text-gray-100 flex-grow flex items-center justify-center">
                890
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
