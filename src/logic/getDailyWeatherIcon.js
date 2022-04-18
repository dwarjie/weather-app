// this is for the daily weather information
import {
	WiDaySunny,
	WiDayCloudy,
	WiCloud,
	WiCloudy,
	WiRain,
	WiThunderstorm,
	WiSnow,
	WiWindy,
} from "react-icons/wi";

const getDailyWeatherIcon = (code) => {
	let icon;
	if (code === "01d" || code === "01n") {
		icon = <WiDaySunny className="text-[2rem]" />;
	}

	if (code === "02d" || code === "02n") {
		icon = <WiDayCloudy className="text-[2rem]" />;
	}

	if (code === "03d" || code === "03n") {
		icon = <WiCloud className="text-[2rem]" />;
	}

	if (code === "04d" || code === "04n") {
		icon = <WiCloudy className="text-[2rem]" />;
	}

	if (code === "09d" || code === "09n") {
		icon = <WiRain className="text-[2rem]" />;
	}

	if (code === "10d" || code === "10n") {
		icon = <WiRain className="text-[2rem]" />;
	}

	if (code === "11d" || code === "11n") {
		icon = <WiThunderstorm className="text-[2rem]" />;
	}

	if (code === "13d" || code === "13n") {
		icon = <WiSnow className="text-[2rem]" />;
	}

	if (code === "50d" || code === "50n") {
		icon = <WiWindy className="text-[2rem]" />;
	}

	return icon;
};

export default getDailyWeatherIcon;
