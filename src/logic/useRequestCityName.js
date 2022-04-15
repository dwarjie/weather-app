// this custom hook is for requesting an API call using city name
import { useState } from "react";

// helper classes
import { RequestCityName } from "../api/RequestAPICall";

const useRequestCityName = () => {
	// this is for the current weather data
	const [currentWeatherData, setCurrentWeatherData] = useState({});

	async function requestCityName(place) {
		// request using city name
		let resp = await RequestCityName(place);
		// request using the coord
		setCurrentWeatherData(resp);

		return resp;
	}

	return [currentWeatherData, requestCityName];
};

export default useRequestCityName;
