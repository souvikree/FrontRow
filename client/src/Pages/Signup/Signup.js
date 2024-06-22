import { Icon } from '@iconify/react';
import TextInput from '../Icons/TextInput';
import PasswordInput from '../Icons/PasswordInput';
import { Link } from 'react-router-dom';

const SignupComponent = () => {
    return (
        <div className="min-h-screen top-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg overflow-hidden ">
                <div className="px-6 py-6">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-8">
                        {/* <Icon icon="logos:spotify" className="text-green-500 text-5xl" /> */}
                        <h2 className="text-3xl font-bold     ">Sign up to buy Corner Seat</h2>
                    </div>

                    {/* Form Section */}
                    <form className="space-y-3"> 
                        {/* Email Input */}
                        <div>
                            <TextInput 
                                label="Email"
                                placeholder="name@domain.com"
                                className="py-2 px-4"
                            />
                        </div>

                        {/* Confirm Email Input */}
                        <div>
                            <TextInput 
                                label="Confirm Email"
                                placeholder="name@domain.com"
                                className="py-2 px-4"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4 pl-4 pr-4"> 
                            <PasswordInput 
                                label="Create a Password"
                                placeholder="Should be at least 6 characters"
                                className="py-2 px-4"
                            />
                        </div>

                        {/* Username Input */}
                        <div>
                            <TextInput 
                                label="Username"
                                placeholder="Enter a Username"
                                className="py-2 px-4"
                            />
                        </div>

                        {/* Sign Up Button */}
                        {/* className='ml-4 mr-4' */}
                        <div >
                            <button className="w-full bg-green-500 text-lg font-semibold text-white py-2 mt-4  px-4 rounded-lg hover:bg-green-600 transition duration-300">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700"></div>

                {/* Login Section */}
                <div className="px-6 py-4 bg-gray-700">
                    <p className="text-center mt-0 text-lg">
                        Already have an account? 
                        <Link to="/login" className="text-green-500 ml-1 font-bold hover:text-green-600">
                            Log In Instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
