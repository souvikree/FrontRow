// import React, { useState, useEffect, useRef } from "react";
// import DateSelector from "./DateSelector";
import TheaterTimes from "./TheaterTimes";

import SeatCounter from "./SeatCounter";


const Booking = () => {
    return(
        <div className="min-h-screen bg-black">
            {/* <DateSelector/> */}
            <TheaterTimes/>
            

            <SeatCounter/>

        </div>
    )
}

export default Booking;
