import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full z-50 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 pl-1">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden sm:flex sm:ml-6 space-x-8">
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Movies
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Theaters
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                My-Movies
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                My-Theaters
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a
              href="/"
              className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium border border-white"
            >
              Log in
            </a>
            <a
              href="/"
              className="text-white hover:bg-gray-900 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium border border-white"
            >
              Register
            </a>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
          >
            Movies
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900"
          >
            Theaters
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900"
          >
            My-Movies
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            My-Theaters
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900"
          >
            About
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white border border-white hover:bg-gray-900"
          >
            Log in
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white border border-white hover:bg-gray-900"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
