import React from "react";

// components
import SearchBar from "./SearchBar";
import SideInfo from "./SideInfo";
import MainInfo from "./MainInfo";
import DailyInfo from "./DailyInfo";

// component logic
import useRequestCityName from "../logic/useRequestCityName";
import useRequestCityCoord from "../logic/useRequestCityCoord";

const PageContainer = () => {
	const [currentWeatherData, setCurrentWeatherData] = useRequestCityName();
	const [dailWeatherData, setDailyWeatherData] = useRequestCityCoord();

	// request for city name and city coord
	async function fetchAPI(e, place) {
		if (e.key === "Enter") {
			let resp = await setCurrentWeatherData(place);
			await setDailyWeatherData(resp);

			console.log(currentWeatherData, dailWeatherData);
		}
	}

	return (
		<div className="bg-cover bg-center bg-no-repeat bg-[url('./image/bg.jpg')] w-[100vw] h-[100vh] ">
			<div className="w-full h-full bg-overlay opacity-[60%]">
				<div className="bg-none w-[90%] pt-6 mx-auto text-primaryColor">
					<SearchBar onKeyEnter={fetchAPI} />
					<div className="sm: flex flex-row justify-between items-start">
						<MainInfo />
						<SideInfo />
					</div>
					<DailyInfo />
				</div>
			</div>
		</div>
	);
};

export default PageContainer;
