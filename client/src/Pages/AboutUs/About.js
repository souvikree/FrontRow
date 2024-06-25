import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import sujit from "../assets/1.png";
import souvik from "../assets/2.jpg";
import sourish from "../assets/3.jpg";
import chandan from "../assets/4.jpg";
import manomoy from "../assets/5.jpg";
import Vector from "../assets/vector.png";

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
    <div className='bg-black min-h-screen py-12 pl-12 mr-0'>
      <div className='bg-white text-black rounded-lg p-8 m-8 md:m-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Text Area */}
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight tracking-wider text-gray-900 mb-6 md:mb-10'>
              Welcome to FrontRow
            </h1>
            <p className='text-lg md:text-xl font-semibold text-gray-700 text-left'>
              FrontRow is your premier movie booking platform, offering an intuitive and user-friendly experience. Browse, book, and enjoy movies effortlessly with our elegant interface.
            </p>
            <p className='text-lg md:text-xl font-semibold text-gray-700 mt-4 text-left'>
              Discover comprehensive movie details, including trailers, synopses, cast and crew information, and user reviews. Stay updated with real-time updates on the latest releases and showtimes.
            </p>
            <p className='text-lg md:text-xl font-semibold text-gray-700 mt-4 text-left'>
              Secure and fast booking with advanced encryption ensures your information is protected. Personalized movie recommendations enhance your viewing experience.
            </p>
            <p className='text-lg md:text-xl font-semibold text-gray-700 mt-4 text-left'>
              Join FrontRow for a seamless, convenient, and exciting way to experience movies.
            </p>
            <button className='mt-8 md:mt-12 bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg'>
              Support Us!
            </button>
          </div>
          {/* Images */}
          <div className='flex justify-center items-center '>
            <img className='w-full h-auto object-cover md:max-h-96' src={Vector} alt="Vector Illustration" />
          </div>
        </div>

        {/* Team Section */}
        <section className="container mx-auto py-12 mt-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 md:w-48 md:h-48">
                  <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-base md:text-lg text-gray-600 mb-2">{member.role}</p>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <a className="text-gray-600 hover:text-blue-600" href={member.socialLinks.facebook}>
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  </a>
                  <a className="text-gray-600 hover:text-blue-400" href={member.socialLinks.twitter}>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a className="text-gray-600 hover:text-gray-900" href={member.socialLinks.github}>
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default AboutUs;
