// This module if for API Calls
// This is were the function for calling the data from Weather API
const API_KEY = 'c1222125f4c158d3d81d2db8ef692f33';
let API_units = 'metric';

// this function will need url as a parameter
// in order to make the API request
async function RequestAPICall(url) {
	try {
		const resp = await fetch(url);
		// check if the resp is not usable
		if (!resp.ok) throw new Error(resp.statusText); 
		return await resp.json();
	} catch(e) {
		console.log(e);
	}
}

// this function will make the API request using city name
async function RequestCityName(place) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`;
	const res = await RequestAPICall(url);

	// get the daily weather
	RequestDailyWeather(res.coord.lat, res.coord.lon);
}

// this function will make the API request using longtitude and latitude 
// this will provide the information for the next 7 days
// it will use the lat, and lon result from RequestCityName
async function RequestDailyWeather(lat, lon) {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${API_units}&appid=${API_KEY}`;
	const res = await RequestAPICall(url);
	console.log(res);
}

export { RequestCityName, API_units };