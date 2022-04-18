import React from "react";

// component
import getDailyWeatherIcon from "../logic/getDailyWeatherIcon";

const DailyInfoComponent = (props) => {
	const weatherIcon = () => {
		return getDailyWeatherIcon(props.iconCode);
	};

	return (
		<li className="w-full flex flex-row justify-between mb-4">
			<h5 className="font-semibold">{props.day}</h5>
			<div className="w-1/5 flex flex-row justify-between items-center">
				<h5 className="font-medium">{`${Math.round(props.temp)}°C`}</h5>
				{weatherIcon()}
				{/* <WiDaySunny className="text-[2rem]" /> */}
			</div>
		</li>
	);
};

export default DailyInfoComponent;
