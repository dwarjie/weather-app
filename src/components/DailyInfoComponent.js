import React from "react";
import { WiDaySunny } from "react-icons/wi";

const DailyInfoComponent = (props) => {
    return (
        <li className="w-full flex flex-row justify-between mb-4">
            <h5 className="font-semibold">{props.day}</h5>
            <div className="w-1/5 flex flex-row justify-between items-center">
                <h5 className="font-medium">16°C</h5>
                <WiDaySunny className="text-[2rem]"/>
            </div>
        </li>
    );
}

export default DailyInfoComponent;