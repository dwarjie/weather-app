// This module contains all the data needed for the website
// it will be imported to RequestAPICall in order to populate with data request

// The data needed:
// The weather (celcius or fahrenheit)
// The icon for the weather (sunny, cloudy, rainy)
// humidity
// Chance of rain
// wind speed
// 7 days weather with weather and icon

export const APIData = (function(){
	let currentWeather; 
	let dailyWeather;

	// pass the requested promise and extract only the data needed
	function setAPIData(current, daily) {
		currentWeather = {
			placeName: current.name,
			weatherTemp: current.main.temp,
			weatherDesc: current.weather[0].main,
			humidity: current.main.humidity,
			rainChance: daily.daily[0].pop,
			windSpeed: current.wind.speed
		}

		dailyWeather = daily.daily;
	}

	function getCurrentWeather() {
		return currentWeather;	
	}

	function getDailyWeather() {
		return dailyWeather;	
	}

	return { setAPIData, getCurrentWeather, getDailyWeather };
})();