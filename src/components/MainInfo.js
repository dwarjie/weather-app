import React from "react";
import { WiCloudy } from "react-icons/wi";

const MainInfo = () => {
    return (
        <div className="text-left sm: mt-24">
            <WiCloudy className="sm: text-[9rem]"/>
            <h2 className="font-semibold sm: text-3xl">Cloudy</h2>
            <h4 className="sm: text-base">Philippines</h4>
            <h1 className="font-bold sm: text-[2.5rem] ">-12°C</h1>
            <button className="bg-primaryColor text-darkPrimary rounded-lg text-[.6rem] sm: w-[4.5rem] h-5">Display in °F</button>
        </div>
    );
}

export default MainInfo;