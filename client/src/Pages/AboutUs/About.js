import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import sujit from "../assets/1.png";
import souvik from "../assets/2.jpg";
import sourish from "../assets/3.jpg";
import chandan from "../assets/4.jpg";
import manomoy from "../assets/5.jpg";
import ProfileCard from "./components/ProfileCard";
// import Vector from "../assets/vector.png";

const teamMembers = [
  {
    name: "Chandan Maity",
    role: "Fullstack Web Developer",
    image: chandan,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Manomoy Maity",
    role: "Fullstack Web Developer",
    image: manomoy,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      github: "https://github.com/manomoymaity",
    },
  },
  {
    name: "Sourish Das",
    role: "Fullstack Web Developer",
    image: sourish,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Souvik Ghosh",
    role: "Fullstack Web Developer",
    image: souvik,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sujit Kumar Halder",
    role: "Fullstack Web Developer",
    image: sujit,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className='bg-black text-black rounded-lg p-8 m-8 ml-24 mb-0 '>
        <div className='grid grid-cols-2 gap-x-10 px-5 md:px-16'>
          
          
          <div className='flex flex-col h-screen justify-center '>
            <h1 className='flex pl-10 text-5xl font-mono font-bold leading-tight tracking-wider text-gray-900'>FRONTROW</h1>
            <p className='text-left pl-10 text-xl font-semibold text-gray-700 mt-6'>
              Welcome to FrontRow, your premier movie booking platform. 
              We offer an <span className="inline-flex items-center"><FontAwesomeIcon icon={faFilm} className="mr-2 " />Movie booking intuitive</span> and <span className="inline-flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2" />user-friendly</span>  experience, 
              making it easy for you to browse, book, and enjoy movies. 
              Our elegant interface allows you to effortlessly search for movies, view showtimes, and select your preferred seats.
            </p>
            <p className='text-left pl-10 text-xl font-semibold text-gray-700 mt-4'>
              Front Row provides comprehensive movie details, including trailers, synopses, cast and crew information, and user reviews, ensuring informed decisions. 
              Stay updated with the latest releases and showtimes through real-time updates, never missing out on new movies or the best seats.
            </p>
            <p className='text-left pl-10 text-xl font-semibold text-gray-700 mt-4'>
              Booking is fast and secure, with advanced encryption protecting your information. 
              Our personalized movie recommendations help you discover films that match your tastes, enhancing your viewing experience.
            </p>
            <p className='text-left pl-10 text-xl font-semibold text-gray-700 mt-4'>
              Join Front Row and enjoy a seamless, convenient, and exciting way to experience movies.
            </p>
            <button className='shadow-lg mt-12 bg-blue-700 hover:bg-blue-600 text-white h-10 w-36 rounded-full self-start ml-10'>Support Us!</button>
          </div>
         
          <div className='flex flex-col justify-center items-center h-screen'>
            <img className='w-full h-auto object-cover' src={Vector} alt="Vector Illustration" />
          </div>
        </div>
        <section className="container mx-auto py-20 px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="shadow-lg rounded-full overflow-hidden w-32 h-32 mx-auto">
                  <img className="w-full h-full object-cover rounded-full" src={member.image} alt={member.name} />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-gray-900">{member.name}</h3>
                <h4 className="text-md font-normal text-gray-600 mb-2">{member.role}</h4>
                <ul className="flex justify-center space-x-4">
                  <li>
                    <a className="text-gray-600 hover:text-blue-600" href={member.socialLinks.facebook}>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-blue-400" href={member.socialLinks.twitter}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900" href={member.socialLinks.github}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default AboutUs;
