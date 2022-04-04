// This module if for API Calls
// This is were the function for calling the data from Weather API
const API_KEY = 'c1222125f4c158d3d81d2db8ef692f33';


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

async function ApiFunction(place) {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`);
		const res = await response.json();
		let lat = res.coord.lat;
		let lon = res.coord.lon;
		console.log(res);
		GetDailyWeather(lat, lon);
	} catch(e) {
		console.log(e);
	}
}

async function GetDailyWeather(lat, lon) {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`);
		const res = await response.json();
		console.log(res);
	} catch(e) {
		console.log(e);
	}
}

export default ApiFunction;