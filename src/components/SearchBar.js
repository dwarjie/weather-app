import React, { useState } from "react";

const SearchBar = (props) => {
	const [inputPlace, setInputPlace] = useState({
		place: "",
	});

	const onChange = (e) => {
		setInputPlace({
			...inputPlace,
			place: e.target.value,
		});
	};

	return (
		<div className="flex flex-row justify-end">
			<input
				className="bg-transparent border-primaryColor border-b-2 w-full xl:w-1/3"
				type="text"
				placeholder="Search Place"
				value={inputPlace.place}
				name="place"
				onChange={onChange}
				onKeyUp={(e) => {
					props.onKeyEnter(e, inputPlace.place);
					// if enter is clicked, clear the search bar
					if (e.key === "Enter") {
						setInputPlace({ place: "" });
					}
				}}
			/>
		</div>
	);
};

export default SearchBar;
