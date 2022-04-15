import React from "react";

// component
import SideInfoComponent from "./SideInfoComponent";

const SideInfo = (props) => {
	const meterToKilometer = () => {
		return Math.round(props.currentWeather.windSpeed * (18 / 5));
	};
	return (
		<div className="text-right sm: w-1/2 mt-12">
			<SideInfoComponent
				title="Humidity"
				value={props.currentWeather.humidity}
			/>
			<SideInfoComponent
				title="Chance of Rain"
				value={`${props.dailyWeather.rainChance}%`}
			/>
			<SideInfoComponent
				title="Wind Speed"
				value={`${meterToKilometer()} Km/h`}
			/>
		</div>
	);
};

export default SideInfo;
