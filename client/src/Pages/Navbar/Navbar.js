import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/FrontRow.png";

const Navbar = () => {
  return (
    <nav className="bg-black backdrop-blur-lg fixed w-full z-50 top-0">
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between sm:items-stretch sm:justify-start w-full">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-6 mt-2 sm:mt-0 w-auto" />
            </div>
            <div className="hidden sm:flex sm:ml-6 space-x-8">
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-4 py-2 rounded-3xl text-sm font-medium"
              >
                Movies
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-4 py-2 rounded-3xl text-sm font-medium"
              >
                StandUp
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-4 py-2 rounded-3xl text-sm font-medium"
              >
                Sports
              </a>
              <a
                href="/"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-4 py-2 rounded-3xl text-sm font-medium"
              >
                My Movies
              </a>
              <Link
                to="/about"
                className="text-white hover:bg-gray-900 hover:text-gray-100 px-5 py-2 rounded-3xl text-sm font-medium"
              >
                About
              </Link>
            </div>
            <div className="hidden sm:flex sm:ml-auto sm:space-x-4">
              <div className="flex space-x-4">
                <Link to="/signup">
                  <a
                    href="/"
                    className="text-white hover:bg-gray-900 hover:text-gray-100 px-4 py-2 rounded-3xl text-sm font-medium border border-white"
                  >
                    Log in
                  </a>
                </Link>
                <Link to="/login">
                  <a
                    href="/"
                    className="text-white hover:bg-gray-900 hover:text-gray-100 px-4 py-2 rounded-3xl text-sm font-medium border border-white"
                  >
                    Signup
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
            className="block px-3 py-2 rounded-3xl text-base font-medium text-white hover:bg-gray-900"
          >
            StandUp
          </a>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-3xl text-base font-medium text-white hover:bg-gray-900"
          >
            About
          </Link>
          <a
            href="/"
            className="block px-3 py-2 rounded-3xl text-base font-medium text-white border border-white hover:bg-gray-900"
          >
            Log in
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-3xl text-base font-medium text-white border border-white hover:bg-gray-900"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
