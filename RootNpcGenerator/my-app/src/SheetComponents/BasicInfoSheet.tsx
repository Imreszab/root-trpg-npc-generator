import React from "react";
import { useEffect, useRef } from "react";
import { BasicInfoProps, NpcBase } from "./Types";

const BasicInfoSheet = ({ basicInfo, handleEdit }: BasicInfoProps) => {
	return (
		<div className="card basic-info">
			<h2 className="card-title"> Basic information</h2>

			<label>Name: </label>
			<span onClick={(e) => handleEdit(e, basicInfo.name, "name")}>
				{basicInfo.name}
			</span>
			<br />
			<label>Race: </label>
			<span>{basicInfo.race.name}</span>
			<br />
			<label>Age: </label>
			<span>{basicInfo.age.name}</span>
			<br />
			<label>Gender: </label>
			<span>{basicInfo.gender.name}</span>
			<br />
			<label>Faction: </label>
			<span>{basicInfo.faction.name}</span>
		</div>
	);
};

export default BasicInfoSheet;
