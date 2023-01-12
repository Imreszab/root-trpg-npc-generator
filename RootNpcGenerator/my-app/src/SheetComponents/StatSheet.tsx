import React from "react";
import { StatProps } from "./Types";

const StatSheet = ({ stats, wear }: StatProps) => {
	return (
		<div className="card stats">
			<h2 className="card-title"> Stats</h2>
			<label>Injury: </label>
			<span>{stats.injury}</span>
			<br />
			<label>Exhaustion: </label>
			<span>{stats.exhaustion}</span>
			<br />
			<label>Wear: </label>
			<span>{wear}</span>
			<br />
			<label>Moral: </label>
			<span>{stats.moral}</span>
			<br />
		</div>
	);
};

export default StatSheet;
