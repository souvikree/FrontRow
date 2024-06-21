import React, { useState, useEffect, useRef } from "react";
import DateSelector from "./DateSelector";
import SeatCounter from "./SeatCounter";

const Booking = () => {
    return(
        <div>
            <DateSelector/>
            <SeatCounter/>
        </div>
    )
}

export default Booking;
