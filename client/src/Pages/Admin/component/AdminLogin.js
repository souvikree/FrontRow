
// Chandan
import React from "react";
import background from "../../../Pages/Data/images/Openheimer.jpg";
const AdminLogin = () => {
  return (
    <div>
      <div className="bg-cover bg-black bg-center bg-fixed ">
        <img
          src={background}
          className="absolute inset-0 object-cover w-full h-full z-0 "
        />
        <div className="h-screen flex justify-center items-center">
          <div className=" mx-4 p-8 shadow-2xl shadow-lime-600 w-full md:w-1/2 lg:w-1/3 backdrop-blur-md rounded-3xl">
            <h1 className="text-3xl font-bold mb-8 text-center text-amber-200">
              Admin Login
            </h1>
            <form>
              <div className="mb-4">
                <label
                  className="block font-semibold text-gray-300 mb-2 text-left ml-3"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border rounded-3xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className=" block font-semibold text-gray-300 mb-2 text-left ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border rounded-3xl w-full py-2 px-3 text-white mb-11 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <a className="text-slate-100 hover:text-blue-800" href="#">
                  Forgot your password?
                </a>
              </div>
              <div className="mb-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
