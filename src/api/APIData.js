// This module contains all the data needed for the website
// it will be imported to RequestAPICall in order to populate with data request

export default function APIData() {
	let currentWeather; 
	let dailyWeather;

	// this will extract only the current weather info needed
	function getCurrentWeather(res) {
		
	}

	// this will extract only the daily weather info needed
	function getDailyWeather(res) {

	}

	return { getCurrentWeather, getDailyWeather };
}