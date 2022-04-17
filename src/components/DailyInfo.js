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
		let currDay = 1;
		let dayComponent = props.dailyWeather.daily.map((data) => {
			return <DailyInfoComponent day={arrDays[currDay]} temp={data.temp.max} />;
		});

		return dayComponent;
	};
	return (
		<div className="w-full sm: mt-16">
			<ul>
				{/* {displayDaily} */}
				<DailyInfoComponent day="Sunday" />
				<DailyInfoComponent day="Monday" />
				<DailyInfoComponent day="Tuesday" />
				<DailyInfoComponent day="Wednesday" />
				<DailyInfoComponent day="Thursday" />
				<DailyInfoComponent day="Friday" />
				<DailyInfoComponent day="Saturday" />
			</ul>
		</div>
	);
};

export default DailyInfo;
