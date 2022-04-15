// this function will set the data of current weather and daily weather
const SetData = (current, daily) => {
	// / set all the needed data to currentWeather and dailyWeather
	let currentWeatherData;
	let dailyWeatherData;

	currentWeatherData = {
		placeName: current.name,
		weatherTemp: current.main.temp,
		weatherDesc: current.weather[0].main,
		humidity: current.main.humidity,
		rainChance: daily.daily[0].pop,
		windSpeed: current.wind.speed,
	};

	dailyWeatherData = daily.daily;

	return [currentWeatherData, dailyWeatherData];
};

export default SetData;
