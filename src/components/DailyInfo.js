import React from "react";

// component
import DailyInfoComponent from "./DailyInfoComponent";

const DailyInfo = (props) => {
	let unit;

	// check what is the unit measure
	if (props.unitMeasure === "metric") {
		unit = "°C";
	} else {
		unit = "°F";
	}

	const arrDays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const displayDaily = () => {
		if (props.dailyWeather.daily === undefined) return "";

		return props.dailyWeather.daily.map((data, index) => {
			if (index === 7) return "";
			return (
				<DailyInfoComponent
					day={arrDays[index]}
					temp={data.temp.max}
					iconCode={data.weather[0].icon}
					unitMeasure={unit}
				/>
			);
		});
	};

	return (
		<div className="w-full mt-16 pb-5 xl:flex flex-row justify-end">
			<ul className="xl:w-1/3">{displayDaily()}</ul>
		</div>
	);
};

export default DailyInfo;
