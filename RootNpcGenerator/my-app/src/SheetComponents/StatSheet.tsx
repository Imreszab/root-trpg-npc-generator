import React from "react";

type ContentProps = {
	wear: number;
	randomInjury: number;
	randomExhaustion: number;
	randomMoral: number;
};

const StatSheet = ({
	wear,
	randomInjury,
	randomExhaustion,
	randomMoral,
}: ContentProps) => {
	return (
		<div className="card stats">
			<h2 className="card-title"> Stats</h2>
			<label>Injury: </label>
			<span>{randomInjury}</span>
			<br />
			<label>Exhaustion: </label>
			<span>{randomExhaustion}</span>
			<br />
			<label>Wear: </label>
			<span>{wear}</span>
			<br />
			<label>Moral: </label>
			<span>{randomMoral}</span>
			<br />
		</div>
	);
};

export default StatSheet;
