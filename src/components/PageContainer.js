import React, { useState } from "react";

// components
import SearchBar from "./SearchBar";
import SideInfo from "./SideInfo";
import MainInfo from "./MainInfo";
import DailyInfo from "./DailyInfo";

// API classes
import { RequestCityName } from "../api/RequestAPICall";
import { APIData } from "../api/APIData";

const PageContainer = () => {
	// this is for the current weather data
	const [currentWeatherData, setCurrentWeatherData] = useState({
		placeName: "",
		weatherTemp: 0,
		weatherDesc: "",
		humidity: 0,
		rainChance: 0,
		windSpeed: 0,
	});

	// this is for the daily future weather data
	const [dailyWeatherData, setDailyWeatherData] = useState([]);

	const requestCityName = (e, place) => {
		if (e.key === "Enter") {
			RequestCityName(place);
			let res = APIData.getCurrentWeather();
			console.log(res);
		}
	};

	return (
		<div className="bg-cover bg-center bg-no-repeat bg-[url('./image/bg.jpg')] w-[100vw] h-[100vh] ">
			<div className="w-full h-full bg-overlay opacity-[60%]">
				<div className="bg-none w-[90%] pt-6 mx-auto text-primaryColor">
					<SearchBar onKeyEnter={requestCityName} />
					<div className="sm: flex flex-row justify-between items-start">
						<MainInfo />
						<SideInfo />
					</div>
					<DailyInfo />
				</div>
			</div>
		</div>
	);
};

export default PageContainer;
