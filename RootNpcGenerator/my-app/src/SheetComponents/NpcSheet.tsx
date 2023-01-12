import React, { useState } from "react";
import "../SheetCss/NpcSheet.css";
import BasicInfoSheet from "./BasicInfoSheet";
import StatSheet from "./StatSheet";
import EquipmentSheet from "./EquipmentSheet";
import TrackerSheet from "./TrackerSheet";
import { SheetProps, Npc, NpcTracker, NpcStats, NpcBase } from "./Types";

import PageMenu from "../SidebarComponents/PageMenu";

const NpcSheet = ({ pageName, npc, handleGenerate }: SheetProps) => {
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

	return (
		<div className="grid-container-sheet">
			<div className="grid-container sheet">
				<TrackerSheet tracker={tracker} />
				<div className="grid-Column">
					<div className="grid-column-row">
						<StatSheet stats={npcStats} wear={npc.armor.wear} />
						<EquipmentSheet weapon={npc.weapon} armor={npc.armor} />
					</div>
					<BasicInfoSheet basicInfo={npcBase} />
				</div>
			</div>
			<PageMenu handleGenerate={handleGenerate} pageName={pageName} />
		</div>
	);
};

export default NpcSheet;
