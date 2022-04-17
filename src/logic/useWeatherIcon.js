// this custom hook is to get the right icon and return it base from the weather information
import { useState } from "react";
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

const useWeatherIcon = () => {
	const [weatherIcon, setWeatherIcon] = useState(
		<WiDaySunny className="sm: text-[9rem]" />
	);
	let icon;

	const getWeatherIcon = (code) => {
		if (code === "01d" || code === "01n") {
			icon = <WiDaySunny className="sm: text-[9rem]" />;
		}

		if (code === "02d" || code === "02n") {
			icon = <WiDayCloudy className="sm: text-[9rem]" />;
		}

		if (code === "03d" || code === "03n") {
			icon = <WiCloud className="sm: text-[9rem]" />;
		}

		if (code === "04d" || code === "04n") {
			icon = <WiCloudy className="sm: text-[9rem]" />;
		}

		if (code === "09d" || code === "09n") {
			icon = <WiRain className="sm: text-[9rem]" />;
		}

		if (code === "10d" || code === "10n") {
			icon = <WiRain className="sm: text-[9rem]" />;
		}

		if (code === "11d" || code === "11n") {
			icon = <WiThunderstorm className="sm: text-[9rem]" />;
		}

		if (code === "13d" || code === "13n") {
			icon = <WiSnow className="sm: text-[9rem]" />;
		}

		if (code === "50d" || code === "50n") {
			icon = <WiWindy className="sm: text-[9rem]" />;
		}

		setWeatherIcon(icon);
	};

	return [weatherIcon, getWeatherIcon];
};

export default useWeatherIcon;
