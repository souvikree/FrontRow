import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pay = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState({ name: '', icon: '' });
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showUpiOptions, setShowUpiOptions] = useState(false);
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method !== 'UPI') {
      setUpiId('');
      setSelectedUpiApp({ name: '', icon: '' });
      setShowUpiOptions(false);
    }
    if (method !== 'Card') {
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    }
  };

  const handleProceed = () => {
    if (paymentMethod === 'UPI') {
      if (!selectedUpiApp.name) {
        toast.error('Please select your UPI app');
        return;
      }
      if (!upiId) {
        toast.error('Please enter your UPI ID');
        return;
      }
    }

    if (paymentMethod === 'Card') {
      if (!cardNumber || !expiryDate || !cvv) {
        toast.error('Please enter all card details');
        return;
      }
    }

    console.log(`Proceed with payment method: ${paymentMethod}`);
    navigate('/success');
  };

  const handleUpiAppSelection = (app) => {
    setSelectedUpiApp(app);
    setShowUpiOptions(false);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Choose Payment Method</h1>
          <div className="space-y-4">
            <div
              className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer ${paymentMethod === 'UPI' ? 'bg-gray-900' : ''}`}
              onClick={() => handlePaymentMethodChange('UPI')}
            >
              <span className="text-lg">UPI</span>
              {paymentMethod === 'UPI' && (
                <span className="text-lg"></span>
              )}
            </div>
            {paymentMethod === 'UPI' && (
              <>
                <div
                  className="bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setShowUpiOptions(!showUpiOptions)}
                >
                  {selectedUpiApp.icon && (
                    <img src={selectedUpiApp.icon} alt={selectedUpiApp.name} className="w-10 h-10 rounded-full mr-3" />
                  )}
                  <span className="text-lg">{selectedUpiApp.name || 'Choose UPI App'}</span>
                </div>
                {showUpiOptions && (
                  <div className="space-y-4 mt-4">
                    <div
                      className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer ${selectedUpiApp.name === 'Gpay' ? 'bg-gray-900' : ''}`}
                      onClick={() => handleUpiAppSelection({ name: 'Gpay', icon: 'https://w7.pngwing.com/pngs/191/51/png-transparent-google-pay-or-tez-hd-logo-thumbnail.png' })}
                    >
                      <img
                        src="https://w7.pngwing.com/pngs/191/51/png-transparent-google-pay-or-tez-hd-logo-thumbnail.png"
                        alt="Gpay"
                        className="w-10 h-10 ml-4 rounded-full"
                      />
                      <span className="ml-3 text-lg">Google Pay</span>
                    </div>
                    <div
                      className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer ${selectedUpiApp.name === 'AmazonPay' ? 'bg-gray-900' : ''}`}
                      onClick={() => handleUpiAppSelection({ name: 'AmazonPay', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PP1DI0dcY4QFU_1SwCg5ni0sKUPsWfZTVA&s' })}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PP1DI0dcY4QFU_1SwCg5ni0sKUPsWfZTVA&s"
                        alt="AmazonPay"
                        className="w-8 h-auto ml-4 rounded-full"
                      />
                      <span className="ml-3 text-lg">Amazon Pay</span>
                    </div>
                    <div
                      className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer ${selectedUpiApp.name === 'PhonePe' ? 'bg-gray-900' : ''}`}
                      onClick={() => handleUpiAppSelection({ name: 'PhonePe', icon: 'https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png' })}
                    >
                      <img
                        src="https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png"
                        alt="PhonePe"
                        className="w-8 h-auto ml-4 rounded-full"
                      />
                      <span className="ml-3 text-lg">PhonePe</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="px-4 py-2 w-48 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 font-semibold"
                    placeholder="Enter your UPI ID"
                  />
                  <button
                    className="ml-2 bg-red-600 font-semibold text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Verify
                  </button>
                </div>
              </>
            )}
            <div className="flex items-center my-4">
              <hr className="border-gray-600 w-full" />
              <span className="px-2 text-gray-400">Or</span>
              <hr className="border-gray-600 w-full" />
            </div>
            <div
              className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between cursor-pointer ${paymentMethod === 'Card' ? 'bg-gray-900' : ''}`}
              onClick={() => handlePaymentMethodChange('Card')}
            >
              <span className="ml-3 text-lg">Credit/Debit Card</span>
            </div>
            {paymentMethod === 'Card' && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Card Number"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-1/2 px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-1/2 px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="CVV"
                  />
                </div>
              </div>
            )}
          </div>
          <button
            onClick={handleProceed}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-8 w-full text-lg font-semibold"
          >
            Proceed with Payment
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default Pay;
