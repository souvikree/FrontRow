import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto ml-12 ">
        <div className="flex justify-between items-center">
          <div className=''>
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <p className="text-sm mt-2 pl-10">Phone: 123-456-7890</p>
            <p className="text-sm pl-12">Email: abc@gmail.com</p>
          </div>
          <div className='pr-24 text-white'>
            <p className="font-semibold mb-4 text-lg">Connect with Us</p>
            <ul className="flex space-x-6">
              <li>
                <Icon icon="streamline:facebook-1-solid" width={28} />
              </li>
              <li>
                <Icon icon="prime:twitter" width={28} />
              </li>
              <li>
                <Icon icon="akar-icons:instagram-fill" width={30} />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link to="/contact" className="text-sm hover:text-white">Contact Us </Link>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          &copy; 2024 FrontRow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
