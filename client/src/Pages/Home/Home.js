import React from "react";
import HeroSlider from "./Components/Slider/Slider";
import Middle from "./Components/Middle";
import Topmovies from "./Components/Topmovies";
import Catagory from "./Components/Catagory";


function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="relative overflow-x-hidden min-h-screen pt-1 pl-2  shadow-xl ">
        {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            //  style={{ backgroundImage: 'url("/images/home-background.png")' }}
             aria-hidden="true">
        </div> */}
        <div className="container mx-auto px-4">
          <HeroSlider />
          {/* <MoviesList /> */}
          <div className="px-5 pb-6 overflow-y-auto">
            <Catagory/>
          </div>
          <div className="flex justify-center">
          <Middle/>
          </div>
          
          <div>          
            <Topmovies/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
