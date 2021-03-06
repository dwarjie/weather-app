import React from "react";

// component
import SideInfoComponent from "./SideInfoComponent";

const SideInfo = (props) => {
	let unit;

	// check what is the unit measure
	if (props.unitMeasure === "metric") {
		unit = "km/h";
	} else {
		unit = "mph";
	}
	const meterToKilometer = () => {
		return Math.round(props.currentWeather.windSpeed * (18 / 5));
	};
	return (
		<div className="text-right w-1/2 mt-12">
			<SideInfoComponent
				title="Humidity"
				value={`${props.currentWeather.humidity} %`}
			/>
			<SideInfoComponent
				title="Chance of Rain"
				value={`${props.dailyWeather.rainChance} %`}
			/>
			<SideInfoComponent
				title="Wind Speed"
				value={`${meterToKilometer()} ${unit}`}
			/>
		</div>
	);
};

export default SideInfo;
