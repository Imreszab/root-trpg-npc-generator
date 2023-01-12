import React, { useState } from "react";
import "../SheetCss/NpcSheet.css";
import BasicInfoSheet from "./BasicInfoSheet";
import StatSheet from "./StatSheet";
import EquipmentSheet from "./EquipmentSheet";
import TrackerSheet from "./TrackerSheet";
import { SheetProps, Npc, NpcTracker } from "./Types";

import PageMenu from "../SidebarComponents/PageMenu";

const NpcSheet = ({ pageName, npc, setNpc, handleGenerate }: SheetProps) => {
	let tracker: NpcTracker = {
		injury: npc.npcStats.injury,
		exhaustion: npc.npcStats.exhaustion,
		wear: npc.armor.wear,
		moral: npc.npcStats.moral,
		damageInjury: npc.weapon.injury,
		damageExhaustion: npc.weapon.exhaustion,
	};

	return (
		<div className="grid-container-sheet">
			<div className="grid-container sheet">
				<TrackerSheet tracker={tracker} />
				<div className="grid-Column">
					<div className="grid-column-row">
						<StatSheet stats={npc.npcStats} wear={npc.armor.wear} />
						<EquipmentSheet weapon={npc.weapon} armor={npc.armor} />
					</div>
					<BasicInfoSheet basicInfo={npc.npcBase} />
				</div>
			</div>
			<PageMenu handleGenerate={handleGenerate} pageName={pageName} />
		</div>
	);
};

export default NpcSheet;
