import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 ">
    <hr className="my-8 border-gray-600 mx-auto ml-24" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              Phone: <span className="font-medium">123-456-7890</span>
            </p>
            <p className="text-sm">
              Email: <span className="font-medium">abc@gmail.com</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/3 md:text-left pl-52 pt-12">
            <Link to="/contact" className="text-sm hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/3 md:text-center">
            <p className="text-lg font-semibold mb-4">Connect with Us</p>
            <div className="flex justify-center space-x-6">
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon icon="streamline:facebook-1-solid" width={28} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon icon="prime:twitter" width={28} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon icon="akar-icons:instagram-fill" width={30} />
              </Link>
            </div>
          </div>
          
        </div>
        
        <div className="text-center text-sm text-gray-500 pt-20">
          &copy; 2024 FrontRow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
