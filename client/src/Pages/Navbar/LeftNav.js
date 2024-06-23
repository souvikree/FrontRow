import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div>
      {/* <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-[64px] left-2 z-40 w-10 h-screen pl-4 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* Started from here */}

          <ul className="space-y-2 font-medium group w-10">
            <li>
              <Link to="/profile">
              <a
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group mt-12 my-8 relative hover:translate-x-4 duration-300"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:scale-150 duration-400 text-center"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                <span className={`absolute left-10 text-slate-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200`} >Profile</span>
              </a>
              </Link>
            </li>
            <li>
              <Link to="/explore"> 

            
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition rounded-lg group dark:text-white relative hover:translate-x-4 duration-300"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:scale-150 duration-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <span className="absolute left-10 text-slate-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Search
                </span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a className="hover:translate-x-4 duration-300 flex items-center p-2 text-gray-900 rounded-lg dark:text-white group my-8 relative">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:scale-150 duration-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <span className="absolute left-10 text-slate-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Home
                </span>
              </a>
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="hover:translate-x-4 duration-300 flex items-center p-2 text-gray-900 rounded-lg dark:text-white group my-8 relative"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:scale-150 duration-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
              <span className="absolute left-10 text-slate-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Movies
              </span>
            </a>
          </li>
          <li>
            <a
              href="/Catagory"
              className="hover:translate-x-4 duration-300 flex items-center p-2 text-gray-900 rounded-lg dark:text-white group my-8 relative"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:scale-150 duration-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clipRule="evenodd" />
              </svg>
              <span className="absolute left-10 text-slate-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Category
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:translate-x-4 duration-300 flex items-center p-2 text-gray-900 rounded-lg dark:text-white group my-8 relative"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:scale-150 duration-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="absolute left-10 text-slate-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Settings
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default LeftNav
