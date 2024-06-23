import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PayIcons from './PayIcons';


const Pay = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiApp, setUpiApp] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleProceed = () => {
    if (paymentMethod === 'UPI' && (!upiId || !upiApp)) {
      alert('Please enter your UPI ID and select a UPI app');
      return;
    }

    if (paymentMethod) {
      console.log(`Proceed with payment method: ${paymentMethod}`);
      // Add actual payment processing logic here
      navigate('/success'); // Navigate to a success page or similar
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-red-600">Payment Page</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Select Payment Method</h2>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    className="form-radio text-red-600"
                    onChange={() => handlePaymentMethodChange('UPI')}
                  />
                  <span className="ml-3 text-lg">UPI</span>
                </label>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="mt-2 px-4 py-2 w-full rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 font-semibold"
                      placeholder="Enter your UPI ID"
                    />
                  </div>
                  <span className="text-gray-300 font-bold pt-2">Or</span>
                  <div className="flex-grow">
                    <label className="block text-sm text-gray-300 mb-1">Select UPI App</label>
                    <PayIcons value={upiApp} onChange={(e) => setUpiApp(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Card"
                    className="form-radio text-red-600"
                    onChange={() => handlePaymentMethodChange('Card')}
                  />
                  <span className="ml-3 text-lg">Credit/Debit Card</span>
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={handleProceed}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-8 w-full text-lg font-semibold"
          >
            Proceed with Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
