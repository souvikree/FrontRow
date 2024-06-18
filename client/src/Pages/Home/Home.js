import React from "react";
import Slider from "./Slider/Slider";

function Home() {
    return(
        <div className="relative overflow-x-hidden min-h-screen pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            //  style={{ backgroundImage: 'url("/images/home-background.png")' }}
             aria-hidden="true">
        </div>
        <div className="container mx-auto px-4">
            <Slider />
            {/* <MoviesList /> */}
        </div>
        </div>
    )
}

export default Home