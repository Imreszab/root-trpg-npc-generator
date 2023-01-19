import React from "react";
import { StatProps } from "./Types";

const StatSheet = ({ stats, wear, handleEdit }: StatProps) => {
	return (
		<div className="card stats">
			<h2 className="card-title"> Stats</h2>
			<label>Injury: </label>
			<span onClick={(e) => handleEdit(e, stats.injury, "injury", "")}>
				{stats.injury}
			</span>
			<br />
			<label>Exhaustion: </label>
			<span onClick={(e) => handleEdit(e, stats.exhaustion, "exhaustion", "")}>
				{stats.exhaustion}
			</span>
			<br />
			<label>Wear: </label>
			<span>{wear}</span>
			<br />
			<label>Moral: </label>
			<span onClick={(e) => handleEdit(e, stats.moral, "moral", "")}>
				{stats.moral}
			</span>
			<br />
		</div>
	);
};

export default StatSheet;
