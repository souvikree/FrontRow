import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazonPay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const PayIcons = ({ value, onChange }) => {
  const options = [
    { value: '', label: 'Select an app' },
    { value: 'GPay', label: 'G-Pay', icon: faGooglePay },
    { value: 'PhonePe', label: 'PhonePe', icon: faMobileAlt },
    { value: 'AmazonPay', label: 'AmazonPay', icon: faAmazonPay },
  ];

  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="mt-2 px-4 py-2 w-full rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 appearance-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            <FontAwesomeIcon icon={option.icon} className="mr-2 text-lg text-gray-300" />
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default PayIcons;
