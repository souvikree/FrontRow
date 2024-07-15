import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from "../assets/profileImage.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('https://frontrow-fy8v.onrender.com/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Fetched profile:', response.data);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://frontrow-fy8v.onrender.com/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Logged out");
      localStorage.removeItem('token');
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to logout');
    }
  };

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
    // Implement edit profile logic here
  };

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
    setEmail('');
  };

  const confirmLogout = () => {
    if (profile.email === email) {
      handleLogout();
    } else {
      toast.error('Email does not match');
    }
    closeLogoutModal();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen min-w-full p-4 mt-4 text-white">
      <ToastContainer />
      <div className="w-full max-w-4xl mx-auto pt-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>
          <div className='absolute top-0 right-0 pt-24 pr-24 flex items-center font-semibold'>
            <button onClick={handleEditProfile} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4 flex items-center">
              <Icon icon="nimbus:pencil" className="mr-2" width={18} /> Edit Profile
            </button>
            <button onClick={openLogoutModal} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
        {profile && (
          <div className="border-b border-gray-600 pb-4">
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Name: {profile.username}</h2>
                <p className="text-sm text-gray-400">Email: {profile.email}</p>
                {/* Uncomment below once phone is available */}
                {/* <p className="text-sm text-gray-400">Phone: {profile.phone}</p> */}
              </div>
            </div>
          </div>
        )}
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg text-black">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-4">Please enter your email to confirm logout:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <div className="flex justify-end">
              <button onClick={confirmLogout} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mr-4">
                Done
              </button>
              <button onClick={closeLogoutModal} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
