import React from "react";
import { useEffect, useRef } from "react";
import { BasicInfoProps, NpcBase } from "./Types";

const BasicInfoSheet = ({ basicInfo, handleEdit }: BasicInfoProps) => {
	return (
		<div className="card basic-info">
			<h2 className="card-title"> Basic information</h2>

			<label>Name: </label>
			<span onClick={(e) => handleEdit(e, basicInfo.name, "name", "")}>
				{basicInfo.name}
			</span>
			<br />
			<label>Race: </label>
			<span onClick={(e) => handleEdit(e, basicInfo.race.name, "race", "name")}>
				{basicInfo.race.name}
			</span>
			<br />
			<label>Age: </label>
			<span onClick={(e) => handleEdit(e, basicInfo.age.name, "age", "name")}>
				{basicInfo.age.name}
			</span>
			<br />
			<label>Gender: </label>
			<span
				onClick={(e) => handleEdit(e, basicInfo.gender.name, "gender", "name")}
			>
				{basicInfo.gender.name}
			</span>
			<br />
			<label>Faction: </label>
			<span
				onClick={(e) =>
					handleEdit(e, basicInfo.faction.name, "faction", "name")
				}
			>
				{basicInfo.faction.name}
			</span>
		</div>
	);
};

export default BasicInfoSheet;
