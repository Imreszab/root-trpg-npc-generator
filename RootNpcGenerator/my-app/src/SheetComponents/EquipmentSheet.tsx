import React from "react";

type ContentProps = { weaponName: string; armorName: string };

const EquipmentSheet = ({ weaponName, armorName }: ContentProps) => {
	return (
		<div className="card">
			<h2 className="card-title"> Equipment</h2>
			<label>
				<h5>Weapon: </h5>
			</label>
			<span>{weaponName}</span>
			<br />
			<label>
				<h5>Armor: </h5>
			</label>
			<span>{armorName}</span>
			<br />
		</div>
	);
};

export default EquipmentSheet;
