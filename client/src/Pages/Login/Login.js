import { Link } from 'react-router-dom';
import logo from "../assets/FrontRow.png";
// import movieBackground from "../assets/movie-background.jpg"; // Replace with your movie-related image

const LoginComponent = () => {
    return (
        <div className="relative">
        
            {/* Background Image */}
            {/* <img
                src={movieBackground}
                alt="Movie Background"
                className="absolute inset-0 object-cover w-full h-full"
            />
             */}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="w-full max-w-sm bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="flex justify-center">
                            <img src={logo} className="w-56 h-auto mt-0 pt-0 pb-10" alt="Logo" />
                        </div>
                        
                        <form>
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    placeholder="Enter your email or username" 
                                    className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div className="mb-6 pl-4 pr-4">
                                <input 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white">
                                    Forgot your password?
                                </Link>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-4 rounded-md font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
