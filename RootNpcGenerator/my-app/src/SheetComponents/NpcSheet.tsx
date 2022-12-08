import React from "react";
import "../SheetCss/NpcSheet.css";
import BasicInfoSheet from "./BasicInfoSheet";
import StatSheet from "./StatSheet";
import EquipmentSheet from "./EquipmentSheet";
import TrackerSheet from "./TrackerSheet";
import { Weapon, Armor } from "./Types";
import { weapons, armors } from "./Items";

const NpcSheet = () => {
	const randomWeapon: Weapon =
		weapons[Math.floor(Math.random() * weapons.length)];
	const randomArmor: Armor = armors[Math.floor(Math.random() * armors.length)];

	const getRandomStat = (): number => {
		return Math.floor(Math.random() * 4) + 1;
	};

	const randomInjury: number = getRandomStat();
	const randomExhaustion: number = getRandomStat();
	const randomMoral: number = getRandomStat();

	return (
		<div className="">
			<div className="grid-container sheet">
				<TrackerSheet
					weaponExhaustion={randomWeapon.exhaustion}
					weaponInjury={randomWeapon.injury}
					wear={randomArmor.wear}
					randomInjury={randomInjury}
					randomExhaustion={randomExhaustion}
					randomMoral={randomMoral}
				/>
				<div className="grid-Column">
					<div className="grid-column-row">
						<StatSheet
							wear={randomArmor.wear}
							randomInjury={randomInjury}
							randomExhaustion={randomExhaustion}
							randomMoral={randomMoral}
						/>
						<EquipmentSheet
							weaponName={randomWeapon.name}
							armorName={randomArmor.name}
						/>
					</div>
					<BasicInfoSheet />
				</div>
			</div>
		</div>
	);
};

export default NpcSheet;
