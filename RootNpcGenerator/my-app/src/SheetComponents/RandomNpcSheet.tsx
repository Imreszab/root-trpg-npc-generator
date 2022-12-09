import React from "react";
import NpcSheet from "./NpcSheet";

const RandomNpcSheet = () => {
	let pageName: string = "Generate Npc";
	return (
		<div>
			<NpcSheet pageName={pageName} />
		</div>
	);
};

export default RandomNpcSheet;
