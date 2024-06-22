import { Icon } from '@iconify/react';
import TextInput from '../Icons/TextInput';
import PasswordInput from '../Icons/PasswordInput';
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png";

const LoginComponent = () => {
    return (
        <div className="bg-black relative">
            <div className="absolute top-4 right-4">
                <button className="bg-gray-900  text-white py-1 px-4 rounded-full hover:bg-gray-950  transition duration-300">
                    Help?
                </button>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-gray-900 via-black to-gray-900 ">
                <div className="w-full max-w-sm bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="flex justify-center">
                            {/* <img src={logo} className="w-44 h-auto pb-2" alt="Logo" /> */}
                            {/* <Icon icon="logos:spotify" className="text-green-500 text-5xl" /> */}
                        </div>
                        <h2 className="text-center text-3xl font-bold text-white mb-6">Log In to FrontRow</h2>
                        <form>
                            <div className="mb-4">
                                <TextInput 
                                    label="Email or Username"
                                    placeholder="Enter your email or username"
                                    className="py-2 px-4"
                                />
                            </div>
                            <div className="mb-6 pl-4 pr-4">
                                <PasswordInput 
                                    label="Password"
                                    placeholder="Enter your password"
                                    className="py-2 px-4"
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white">
                                    Forgot your password?
                                </Link>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-4 rounded-md font-semibold transition duration-300"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                    <div className="bg-gray-700 px-6 py-4">
                        <p className="text-center text-white">
                            Don't have an account? 
                            <Link to="/signup" className="text-green-500 hover:text-green-600 ml-1 font-bold">
                                Sign Up to Ride In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
