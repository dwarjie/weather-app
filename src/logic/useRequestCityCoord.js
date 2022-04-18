// this custom hook is for requesting from the API using city coordinates
import { useState } from "react";

// helper classes
import { RequestDailyWeather } from "../api/RequestAPICall";

const useRequestCityCoord = () => {
	// this is for the daily future weather data
	const [dailyWeatherData, setDailyWeatherData] = useState({});

	async function requestCityCoord(lat, lon, unit) {
		// request using lat and lon
		let dailyRes = await RequestDailyWeather(lat, lon, unit);
		console.log(dailyRes);
		setDailyWeatherData({
			daily: dailyRes.daily,
			rainChance: dailyRes.daily[0].pop,
		});
	}

	return [dailyWeatherData, requestCityCoord];
};

export default useRequestCityCoord;
