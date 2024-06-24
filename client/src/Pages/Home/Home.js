import React from "react";
import HeroSlider from "./Components/Slider/Slider";
import Middle from "./Components/Middle";
import Topmovies from "./Components/Topmovies";

function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="relative overflow-x-hidden min-h-screen pt-1 pl-2 shadow-xl">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <HeroSlider />
          <div className="flex justify-center">
            <Middle />
          </div>
          <div className="mt-4">
            <Topmovies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
