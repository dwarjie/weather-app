import React from "react";
import { WiCloudy } from "react-icons/wi";

const MainInfo = (props) => {
	return (
		<div className="text-left sm: mt-24">
			<WiCloudy className="sm: text-[9rem]" />
			<h2 className="font-semibold sm: text-[1.5rem]">
				{props.currentWeather.weatherDesc}
			</h2>
			<h4 className="sm: text-base">{props.currentWeather.placeName}</h4>
			<h1 className="font-bold sm: text-[2.5rem]">{`${Math.round(
				props.currentWeather.weatherTemp
			)}°C`}</h1>
			<button className="bg-primaryColor text-darkPrimary rounded-lg text-[.6rem] sm: w-[4.5rem] h-5">
				Display in °F
			</button>
		</div>
	);
};

export default MainInfo;
