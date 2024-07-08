import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Assets/images/Openheimer.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AdminRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (err) {
      console.error(err);
      setError("Network error occurred. Please try again.");
    }
  };

  return (
    <div className="relative bg-cover bg-black bg-center bg-fixed h-screen">
      <img
        src={background}
        alt="Background image"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
      <div className="flex justify-center items-center h-full">
        <div className="relative mx-4 p-8 shadow-2xl shadow-lime-600 w-full md:w-1/2 lg:w-1/3 backdrop-blur-md rounded-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-amber-200">
            Admin Register
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-300 mb-2 text-left ml-3"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border rounded-3xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-label="Username"
              />
            </div>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email Address"
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block font-semibold text-gray-300 mb-2 text-left ml-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded-3xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent pr-10"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 pt-8 flex items-center cursor-pointer text-white"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="mb-6 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
