import React from "react";

type ContentProps = {
	weaponExhaustion: number;
	weaponInjury: number;
	wear: number;
	randomInjury: number;
	randomExhaustion: number;
	randomMoral: number;
};

const TrackerSheet = ({
	weaponExhaustion,
	weaponInjury,
	wear,
	randomInjury,
	randomExhaustion,
	randomMoral,
}: ContentProps) => {
	const drawTracker = (stat: number): string => {
		let tracker: string = "";
		if (stat === 0) {
			tracker = tracker + "X";
			return tracker;
		}
		for (let i = 0; i < stat; i++) {
			tracker = tracker + "O ";
		}
		return tracker;
	};

	return (
		<div className="card tracker">
			<h2 className="card-title"> Stat Tracker</h2>
			<label>Injury: </label>
			<p>{drawTracker(randomInjury)}</p>
			<label>Exhaustion: </label>
			<p>{drawTracker(randomExhaustion)}</p>
			<label>Wear: </label>
			<p>{drawTracker(wear)}</p>
			<label>Moral: </label>
			<p>{drawTracker(randomMoral)}</p>
			<h3>Damage</h3>
			<label>Injury: </label>
			<span>{weaponInjury}</span> <br />
			<label>Exhaustion: </label>
			<span>{weaponExhaustion}</span>
		</div>
	);
};

export default TrackerSheet;
