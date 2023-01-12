import React from "react";
import { TrackerProps, NpcTracker } from "./Types";

const TrackerSheet = ({ tracker }: TrackerProps) => {
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
			<p>{drawTracker(tracker.injury)}</p>
			<label>Exhaustion: </label>
			<p>{drawTracker(tracker.exhaustion)}</p>
			<label>Wear: </label>
			<p>{drawTracker(tracker.wear)}</p>
			<label>Moral: </label>
			<p>{drawTracker(tracker.moral)}</p>
			<h3>Damage</h3>
			<label>Injury: </label>
			<span>{tracker.damageInjury}</span> <br />
			<label>Exhaustion: </label>
			<span>{tracker.damageExhaustion}</span>
		</div>
	);
};

export default TrackerSheet;
