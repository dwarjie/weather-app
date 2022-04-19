import React from "react";

const MainInfo = (props) => {
	let unit;

	// check what is the unit measure
	if (props.unitMeasure === "metric") {
		unit = "°C";
	} else {
		unit = "°F";
	}

	const handleUnit = () => {
		props.unitChange();
	};

	const capitalizeWord = (str) => {
		if (str === undefined) return;
		return str
			.toLowerCase()
			.split(" ")
			.map(function (word) {
				return word.replace(word[0], word[0].toUpperCase());
			})
			.join(" ");
	};
	return (
		<div className="text-left mt-24">
			{props.weatherIcon}
			<h2 className="font-semibold text-[1.5rem]">
				{capitalizeWord(props.currentWeather.weatherDesc)}
			</h2>
			<h4 className="text-base xl:text-[2rem]">
				{props.currentWeather.placeName}
			</h4>
			<h1 className="font-bold text-[2.5rem] xl:text-[6rem]">{`${Math.round(
				props.currentWeather.weatherTemp
			)}${unit}`}</h1>
			<button
				onClick={handleUnit}
				className="bg-primaryColor text-darkPrimary rounded-lg text-[.6rem] sm: w-[4.5rem] h-5"
			>
				Display in {props.unitMeasure === "metric" ? "°F" : "°C"}
			</button>
		</div>
	);
};

export default MainInfo;
