import { Icon } from "@iconify/react";
import TextInput from "../Icons/TextInput";
import PasswordInput from "../Icons/PasswordInput";
import { Link } from "react-router-dom";
import logo from "../assets/FrontRow.png";
import movieBackgroundVideo from "../assets/video.mp4"; 

const LoginComponent = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
            {/* Background Video */}
            <video
                src={movieBackgroundVideo}
                autoPlay
                loop
                muted
                className="absolute inset-0 object-cover w-full h-full z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

            {/* Help Button */}
            <div className="absolute top-4 right-4 z-20">
                <button className="bg-gray-900 text-white py-1 px-4 rounded-full hover:bg-gray-950 transition duration-300">
                    Help?
                </button>
            </div>

            {/* Login Form */}
            <div className="relative z-20 w-full max-w-md bg-gray-800 shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-4">
                        <img
                            src={logo}
                            className="w-56 h-auto mt-0 pt-0 pb-10"
                            alt="Logo"
                        />
                    </div>

                    {/* Social Media Login */}
                    <div className="flex justify-center space-x-8 mb-2">
                        <button className="flex items-center bg-white text-gray-800 font-bold rounded-lg px-4 py-2 hover:bg-gray-200 transition duration-300">
                            Log in with
                            <Icon
                                icon="logos:google-icon"
                                className="ml-2 text-xl"
                                width={40}
                            />
                        </button>
                        <button className="flex items-center bg-blue-700 text-white font-bold rounded-lg px-4 py-2 hover:bg-blue-800 transition duration-300">
                            Log in with
                            <Icon
                                icon="logos:facebook"
                                className="ml-2 text-xl"
                                width={44}
                            />
                        </button>
                    </div>
                    {/* Separator */}
                    <div className="flex items-center my-1">
                        <hr className="flex-grow border-gray-700" />
                        <span className="mx-4 text-gray-400">or</span>
                        <hr className="flex-grow border-gray-700" />
                    </div>

                    {/* Form Section */}
                    <form className="space-y-3">
                        {/* Email/Username Input */}
                        <div>
                            <TextInput
                                label="Email or Username"
                                placeholder="Enter your email or username"
                                className="py-2 px-4"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6 pl-4 pr-4">
                            <PasswordInput
                                label="Password"
                                placeholder="Enter your password"
                                className="py-2 px-4"
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="flex items-center justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-gray-400 hover:text-white"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-4 rounded-md font-semibold transition duration-300"
                        >
                            Log In
                        </button>
                    </form>
                </div>

                {/* Sign Up Link */}
                <div className="bg-gray-700 px-6 py-4">
                    <p className="text-center text-white">
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="text-green-500 hover:text-green-600 ml-1 font-bold"
                        >
                            Sign Up to Ride In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
