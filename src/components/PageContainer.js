import React, { useEffect } from "react";

// components
import SearchBar from "./SearchBar";
import SideInfo from "./SideInfo";
import MainInfo from "./MainInfo";
import DailyInfo from "./DailyInfo";

// component logic
import useRequestCityName from "../logic/useRequestCityName";
import useRequestCityCoord from "../logic/useRequestCityCoord";
import useWeatherIcon from "../logic/useWeatherIcon";
import useChangeUnit from "../logic/useChangeUnit";

const PageContainer = () => {
	const [currentWeatherData, setCurrentWeatherData] = useRequestCityName();
	const [dailWeatherData, setDailyWeatherData] = useRequestCityCoord();
	const [unitMeasure, setUnitMeasure] = useChangeUnit();
	const [weatherIcon, setWeatherIcon] = useWeatherIcon();

	// run this function in the initial page load
	useEffect(() => {
		fetchAPI("Philippines");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// call request again when unit measure changed
	useEffect(() => {
		fetchAPI(currentWeatherData.placeName);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [unitMeasure]);

	// request for city name and city coord
	async function fetchAPI(place) {
		let resp = await setCurrentWeatherData(place, unitMeasure);
		const coord = resp.coord;
		await setDailyWeatherData(coord.lat, coord.lon, unitMeasure);

		// get the icon base on the weather condition
		console.log(typeof dailWeatherData.daily);
		getWeatherIcon(resp.weather[0].icon);
	}

	// request for city name and city coord
	function searchPlace(e, place) {
		if (e.key === "Enter") {
			fetchAPI(place);
		}
	}

	// get the weather code and pass it to the weatherIcon custom hook
	function getWeatherIcon(icon) {
		setWeatherIcon(icon);
	}

	const handUnitChange = () => {
		console.log(unitMeasure);
		setUnitMeasure();
	};

	return (
		<div className="bg-cover bg-center bg-no-repeat bg-[url('./image/bg.jpg')] w-[100%] h-[100%]">
			<div className="w-full h-full bg-overlay opacity-[60%]">
				<div className="bg-none w-[90%] pt-6 mx-auto text-primaryColor">
					<SearchBar onKeyEnter={searchPlace} />
					<div className="flex flex-row justify-between items-start">
						<MainInfo
							currentWeather={currentWeatherData}
							weatherIcon={weatherIcon}
							unitChange={handUnitChange}
							unitMeasure={unitMeasure}
						/>
						<SideInfo
							currentWeather={currentWeatherData}
							dailyWeather={dailWeatherData}
							unitMeasure={unitMeasure}
						/>
					</div>
					<DailyInfo dailyWeather={dailWeatherData} unitMeasure={unitMeasure} />
				</div>
			</div>
		</div>
	);
};

export default PageContainer;
