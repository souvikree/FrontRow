import React, { useState } from "react";
import Movielist from "../../../components/Data/Movielist";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {



    const [currentIndex, setCurrentIndex] = useState(0);

    const preSlide = () => {
        const isFirstSlide= currentIndex === 0;
        const newIndex = isFirstSlide ? Movielist.length-1 : currentIndex-1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = ()=> {
        const isLastSlide= currentIndex === Movielist.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex)
    }

    const changeSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }


    return(
        <div className="max-w-[1500px] h-[700px] w-full m-auto py-16 px-4 relative group ">
            <div style={{backgroundImage: `url(${Movielist[currentIndex].poster})`}} 
                className="w-full h-full rounded-2xl bg-center bg-cover flex transition-transform ease-out duration-200 object-cover cursor-pointer " >
            </div>

            {/* Leftslide */}

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactLeft onClick={preSlide} size={30} />
            </div>
            {/* rightslide */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" >
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {Movielist.map((slide, slideIndex) => (
                    <div key={slideIndex}
                        onClick={() => changeSlide(slideIndex)}
                        className={`text-2xl cursor-pointer `}>
                        
                        <RxDotFilled/>
                    </div>
                ))}

            </div>
            



        </div>
    )
}

export default Slider
