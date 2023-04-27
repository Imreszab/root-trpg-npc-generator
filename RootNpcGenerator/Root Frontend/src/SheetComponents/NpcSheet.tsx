import React, { useState } from "react";
import "../SheetCss/NpcSheet.css";
import BasicInfoSheet from "./BasicInfoSheet";
import StatSheet from "./StatSheet";
import EquipmentSheet from "./EquipmentSheet";
import TrackerSheet from "./TrackerSheet";
import { SheetProps, NpcTracker, NpcStats, NpcBase } from "./Types";

import PageMenu from "../SidebarComponents/PageMenu";

const NpcSheet = ({ props }: SheetProps) => {
	let npcBase: NpcBase = {
		name: props.npc.name,
		race: props.npc.race,
		age: props.npc.age,
		gender: props.npc.gender,
		faction: props.npc.faction,
	};
	let tracker: NpcTracker = {
		injury: props.npc.injury,
		exhaustion: props.npc.exhaustion,
		wear: props.npc.armor.wear,
		moral: props.npc.moral,
		damageInjury: props.npc.weapon.injury,
		damageExhaustion: props.npc.weapon.exhaustion,
	};
	let npcStats: NpcStats = {
		injury: props.npc.injury,
		exhaustion: props.npc.exhaustion,
		moral: props.npc.moral,
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
			(props.npc as any)[typeName] = text;
		} else {
			(props.npc as any)[typeName][subName] = text;
		}
		console.log(props.npc);
	};

	return (
		<div className="grid-container-sheet">
			<div className="grid-container sheet">
				<TrackerSheet tracker={tracker} />
				<div className="grid-Column">
					<div className="grid-column-row">
						<StatSheet
							stats={npcStats}
							wear={props.npc.armor.wear}
							handleEdit={handleEdit}
						/>
						<EquipmentSheet weapon={props.npc.weapon} armor={props.npc.armor} />
					</div>
					<BasicInfoSheet basicInfo={npcBase} handleEdit={handleEdit} />
				</div>
			</div>
			<PageMenu props={props} />
		</div>
	);
};

export default NpcSheet;
