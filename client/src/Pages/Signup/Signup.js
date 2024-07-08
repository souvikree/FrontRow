import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import TextInput from "../Icons/TextInput";
import PasswordInput from "../Icons/PasswordInput";
import logo from "../assets/FrontRow.png";
import movieBackgroundVideo from "../assets/video2.mp4";

const SignupComponent = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make API call to register user
      const response = await axios.post("http://localhost:8000/api/register", {
        username,
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      
      if (response.status === 201) {
       
        console.log("Registration successful:", response.data);
        navigate('/');

      } else {
        
        const errorData = await response.json();
        console.error('Registration error:', errorData);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error("Error registering:", error);
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
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

      <div className="relative z-20 w-full max-w-md bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-6">
          {/* Logo Section */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="h-8 mt-2 w-auto" />
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">
              Sign up to buy Corner Seat
            </h2>
          </div>

          {/* Social Media Sign Up */}
          <div className="flex justify-center space-x-4 mb-2">
            <button className="flex items-center bg-white text-gray-800 font-bold rounded-lg px-4 py-2 hover:bg-gray-200 transition duration-300">
              Sign up with
              <Icon
                icon="logos:google-icon"
                className="ml-2 text-xl"
                width={32}
              />
            </button>
            <button className="flex items-center bg-blue-700 text-white font-bold rounded-lg px-4 py-2 hover:bg-blue-800 transition duration-300">
              Sign up with
              <Icon icon="logos:facebook" className="ml-2 text-xl" width={34} />
            </button>
          </div>

          {/* Separator */}
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Form Section */}
          <form onSubmit={handleSignup} className="space-y-1">
            {/* Username Input */}
            <div>
              <TextInput
                label="Username"
                placeholder="Enter a Username"
                className="py-2 px-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div>
              <TextInput
                label="Email"
                placeholder="name@domain.com"
                className="py-2 px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 pl-4 pr-4">
              <PasswordInput
                label="Create a Password"
                placeholder="Should be at least 6 characters"
                className="py-2 px-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-lg font-semibold text-white py-2 mt-4 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Login Section */}
        <div className="px-6 py-4 bg-gray-700">
          <p className="text-center mt-0 text-lg text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-500 ml-1 font-bold hover:text-green-600"
            >
              Log In Instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
