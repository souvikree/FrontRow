import React from 'react';
import barcode from "../assets/barcode.png";
import camera1 from "../assets/camera1.jpg";
import profileImage from "../assets/profileImage.png"; // Import your profile image here
const def = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    bookedTickets: [
        { movie: "Avengers: Endgame", date: "2023-06-18", seats: ["A1", "A2", "A3"] },
        { movie: "Inception", date: "2023-07-22", seats: ["B4", "B5"] },
    ],
};

const Profile = ({ user = def }) => {
    const handleLogout = () => {
        console.log("Logged out"); 
    };
    return (
        <div className="bg-black min-h-screen min-w-full p-4 text-white flex pl-24 items-center">
            <div className="w-full max-w-4xl">
                <div className="flex justify-end mb-4">
                    <button onClick={handleLogout} className="bg-black-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Logout
                     </button>
                </div>
                <h2 className="text-3xl font-semibold mt-10 mb-8 flex">Profile :</h2>
                <div className="mb-4 pb-4 border-b border-gray-600 w-screen flex"> 
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex text-lg font-semibold space-x-6">
                        <span>Name: {user.name}</span>
                        <span>Email: {user.email}</span>
                        <span>Phone: {user.phone}</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex">Booked Tickets:</h3>
                    <ul className="pl-2 w-screen max-w-7xl">
                        {user.bookedTickets.map((ticket, index) => (
                            <li key={index} className="mb-6">
                                <div className="flex bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="w-1/4">
                                        <img src={camera1} alt={ticket.movie} className="object-cover h-full w-full" />
                                    </div>
                                    <div className="w-2/4 p-4">
                                        <h4 className="text-lg font-semibold mb-2">{ticket.movie}</h4>
                                        <p>| Date: {ticket.date} |</p>
                                        <p>| Seats: {ticket.seats.join(', ')}|</p>
                                    </div>
                                    <div className="w-1/4 p-4 flex items-center justify-center">
                                        <img src={barcode} alt="Barcode" className="object-contain h-full w-full" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
