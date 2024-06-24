import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Movielist from "../../../Data/Movielist";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Oval } from 'react-loader-spinner';

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const preSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Movielist.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === Movielist.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const changeSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const handleLinkClick = (id) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/movie/${id}`);
        }, 2000); // Simulate loading time, you can adjust the duration
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(autoSlide);
    }, [currentIndex]);

    return (
        <div className="max-w-[1300px] h-[550px] w-full m-auto py-16 px-6 relative group">
            {loading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            ) : (
                <>
                    <div
                        style={{ backgroundImage: `url(${Movielist[currentIndex].poster})` }}
                        className="w-full h-full rounded-2xl bg-center bg-cover flex transition-transform ease-out duration-500 object-cover cursor-pointer relative"
                        onClick={() => handleLinkClick(Movielist[currentIndex].id)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="absolute bottom-0 left-0 p-6 flex flex-col space-y-2 max-w-lg z-10">
                            <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-left">
                                {Movielist[currentIndex].name}
                            </h4>
                            <div className="text-gray-200 text-base font-bold text-left">
                                {Movielist[currentIndex].date} • {Movielist[currentIndex].duration}m • ⭐{Movielist[currentIndex].rating}
                            </div>
                            <div className="text-gray-200 text-lg font-bold mt-auto text-left">
                                {Movielist[currentIndex].tag1} | {Movielist[currentIndex].tag2} | {Movielist[currentIndex].tag3}
                            </div>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-10 text-2xl rounded-full p-2 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={preSlide} size={30} />
                    </div>

                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-10 text-2xl rounded-full p-2 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center py-2">
                        {Movielist.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => changeSlide(slideIndex)}
                                className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? "text-white" : "text-gray-400"}`}
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default HeroSlider;
