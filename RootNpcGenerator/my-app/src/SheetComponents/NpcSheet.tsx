import React, { useState } from "react";
import "../SheetCss/NpcSheet.css";
import BasicInfoSheet from "./BasicInfoSheet";
import StatSheet from "./StatSheet";
import EquipmentSheet from "./EquipmentSheet";
import TrackerSheet from "./TrackerSheet";
import { SheetProps, Npc, NpcTracker, NpcStats, NpcBase } from "./Types";

import PageMenu from "../SidebarComponents/PageMenu";

const NpcSheet = ({
	pageName,
	npc,
	handleGenerate,
	handleSave,
}: SheetProps) => {
	let npcBase: NpcBase = {
		name: npc.name,
		race: npc.race,
		age: npc.age,
		gender: npc.gender,
		faction: npc.faction,
	};
	let tracker: NpcTracker = {
		injury: npc.injury,
		exhaustion: npc.exhaustion,
		wear: npc.armor.wear,
		moral: npc.moral,
		damageInjury: npc.weapon.injury,
		damageExhaustion: npc.weapon.exhaustion,
	};
	let npcStats: NpcStats = {
		injury: npc.injury,
		exhaustion: npc.exhaustion,
		moral: npc.moral,
	};

	const [editInput, setEditInput] = useState<boolean>(false);

	const handleEdit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		text: string,
		typeName: string,
		subName: string
	) => {
		let new_text: string | null = text;

		new_text = prompt("Change value", text);

		if (
			subName === "" &&
			typeName !== "name" &&
			new_text !== null &&
			(+new_text >= 5 ||
				+new_text <= 0 ||
				!isNaN(parseFloat(new_text)) === false)
		) {
			new_text = prompt("Choose number between 1 and 4", text);
		} else if (
			typeName === "name" &&
			new_text !== null &&
			!isNaN(parseFloat(new_text)) === true
		) {
			new_text = prompt("Don't write a number pls!!!", text);
		} else {
			if (new_text != null) {
				console.log(!isNaN(parseFloat(new_text)));
				saveEdit(new_text, typeName, subName);
				setEditInput(!editInput);
			}
		}
	};

	const saveEdit = (text: string, typeName: string, subName: string) => {
		if (subName === "") {
			(npc as any)[typeName] = text;
		} else {
			(npc as any)[typeName][subName] = text;
		}
		console.log(npc);
	};

	return (
		<div className="grid-container-sheet">
			<div className="grid-container sheet">
				<TrackerSheet tracker={tracker} />
				<div className="grid-Column">
					<div className="grid-column-row">
						<StatSheet
							stats={npcStats}
							wear={npc.armor.wear}
							handleEdit={handleEdit}
						/>
						<EquipmentSheet weapon={npc.weapon} armor={npc.armor} />
					</div>
					<BasicInfoSheet basicInfo={npcBase} handleEdit={handleEdit} />
				</div>
			</div>
			<PageMenu
				handleGenerate={handleGenerate}
				pageName={pageName}
				handleSave={handleSave}
			/>
		</div>
	);
};

export default NpcSheet;
