import React from "react";

// component
import DailyInfoComponent from "./DailyInfoComponent";

const DailyInfo = (props) => {
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
				/>
			);
		});
	};

	return (
		<div className="w-full sm: mt-16">
			<ul>{displayDaily()}</ul>
		</div>
	);
};

export default DailyInfo;
