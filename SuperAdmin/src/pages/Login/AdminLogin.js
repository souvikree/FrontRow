import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../Assets/images/Openheimer.jpg';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../Home/components/LoadingSpinner';
import axios from 'axios'; 

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success('Success Notification!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      console.log("Submitting login with email:", email);
      console.log("Submitting login with password:", password);
      const response = await axios.post(
        'http://localhost:8000/api/admin/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        }
      );
  
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/home');
        showToastMessage();
      } else {
        setError(response.data.error || 'Login failed');
      }
    } catch (err) {
      console.error('Error during login request:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
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
            Admin Login
          </h1>
          {error && (
            <p className="text-teal-200 font-bold text-center mb-4">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit}>
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-white"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
              <a
                className="text-slate-100 hover:text-blue-800 flex justify-center mt-3"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
            <div className="mb-6 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? <LoadingSpinner /> : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
