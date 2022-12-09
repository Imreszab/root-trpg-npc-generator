import React from "react";
import NpcSheet from "./NpcSheet";

const LoadNpcSheet = () => {
	let pageName: string = "Load Npc";
	return (
		<div>
			<NpcSheet pageName={pageName} />
		</div>
	);
};

export default LoadNpcSheet;
