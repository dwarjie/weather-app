// this custom hook is for changing the unit of measurement
import { useState } from "react";

const useChangeUnit = () => {
	const [unitMeasure, setUnitMeasure] = useState("metric");

	const assignUnit = () => {
		setUnitMeasure((prevState) => {
			if (prevState === "metric") return "imperial";

			return "metric";
		});
	};

	return [unitMeasure, assignUnit];
};

export default useChangeUnit;
