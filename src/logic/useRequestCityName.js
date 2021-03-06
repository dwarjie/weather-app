// this custom hook is for requesting an API call using city name
import { useState } from "react";

// helper classes
import { RequestCityName } from "../api/RequestAPICall";

const useRequestCityName = () => {
	// this is for the current weather data
	const [currentWeatherData, setCurrentWeatherData] = useState({});

	async function requestCityName(place, unit) {
		// request using city name
		let resp = await RequestCityName(place, unit);
		// request using the coord
		console.log(resp);
		setCurrentWeatherData({
			placeName: resp.name,
			weatherTemp: resp.main.temp,
			weatherDesc: resp.weather[0].description,
			humidity: resp.main.humidity,
			windSpeed: resp.wind.speed,
			lat: resp.coord.lat,
			lon: resp.coord.lon,
		});

		return resp;
	}

	return [currentWeatherData, requestCityName];
};

export default useRequestCityName;
