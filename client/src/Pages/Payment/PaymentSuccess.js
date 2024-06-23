// PaymentSuccess.js
import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
        <p className="text-gray-300 mb-4">Thank you for your purchase!</p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-8"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
