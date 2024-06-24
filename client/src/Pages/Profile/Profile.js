import React from 'react';
import barcode from "../assets/barcode.png";
import camera1 from "../assets/camera1.jpg";
import profileImage from "../assets/profileImage.png"; // Import your profile image here
import { Icon } from '@iconify/react/dist/iconify.js';
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

    const handleEditProfile = () => {
        console.log("Edit profile clicked");
        // Implement your edit profile logic here
    };

    return (
        <div className="bg-black min-h-screen min-w-full p-4 text-white flex pl-28 items-center">
            <div className="w-full max-w-4xl pt-12">
                
                <div className="absolute top-0 right-0 pt-24 pr-24 flex items-center text-lg font-bold">
                    <button onClick={handleEditProfile} className="bg-black-500 border border-white hover:bg-blue-600 text-white  py-2 px-4 rounded flex items-center">
                        <Icon icon="nimbus:pencil" className="mr-2" width={23} />Edit
                    </button>
                    <button onClick={handleLogout} className="bg-black-500 border border-white hover:bg-red-600 text-white  py-2 px-4 rounded ml-4">
                        Logout
                    </button>
                </div>
                <div className="border-b border-gray-600 w-screen flex flex-wrap gap-2 pb-2">
                    <div className="flex top-0 pt-4"> 
                        <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                            <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                        </div>
                        
                    </div>
                    <div className="text-lg text-left  mt-4 font-semibold">
                           <ul>
                           <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                           </ul>
                            
                            
                        </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex pt-2">Booked Tickets:</h3>
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
