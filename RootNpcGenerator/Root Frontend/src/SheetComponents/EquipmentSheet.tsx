import React from "react";
import { Armor, Weapon } from "./Types";

type ContentProps = { weapon: Weapon; armor: Armor };

const EquipmentSheet = ({ weapon, armor }: ContentProps) => {
	return (
		<div className="card">
			<h2 className="card-title"> Equipment</h2>
			<label>
				<h5>Weapon: </h5>
			</label>
			<span>{weapon.name}</span>
			<br />
			<label>
				<h5>Armor: </h5>
			</label>
			<span>{armor.name}</span>
			<br />
		</div>
	);
};

export default EquipmentSheet;
