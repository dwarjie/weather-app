import React from "react";

// component
import SideInfoComponent from "./SideInfoComponent";

const SideInfo = (props) => {
	return (
		<div className="text-right sm: w-1/2 mt-12">
			<SideInfoComponent
				title="Humidity"
				value={props.currentWeather.humidity}
			/>
			<SideInfoComponent title="Chance of Rain" value="0%" />
			<SideInfoComponent title="Wind Speed" value="1.4km/h" />
		</div>
	);
};

export default SideInfo;
