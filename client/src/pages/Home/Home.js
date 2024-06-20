import React from "react";
import HeroSlider from "./Components/Slider/Slider";


function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="relative overflow-x-hidden min-h-screen pt-2 pl-56  shadow-xl ">
        {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            //  style={{ backgroundImage: 'url("/images/home-background.png")' }}
             aria-hidden="true">
        </div> */}
        <div className="container mx-auto px-4">
          <HeroSlider />
          {/* <MoviesList /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
