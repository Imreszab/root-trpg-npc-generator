import React from "react";
import NpcSheet from "./NpcSheet";
import { useEffect, useState } from "react";
import { Npc, NpcBase, starterNpc } from "./Types";
import { getNameOfDeclaration } from "typescript";

const RandomNpcSheet = () => {
	const [npc, setNpc] = useState<Npc>(starterNpc);
	let pageName: string = "Generate Npc";

	const handleGenerate = () => {};

	useEffect(() => {
		const getName = async () => {
			let url: string = "https://localhost:7123/api/Npc/generate/random";
			try {
				const response: Response = await fetch(url, {
					method: "GET",
					headers: {
						Accept: "application/json",
					},
				});
				if (!response.ok) throw Error("Did not receive expected data");
				setNpc(await response.json());
				console.log(npc);
			} catch (err) {
				console.log(err);
			}
		};
		setTimeout(() => {
			(async () => await getName())();
		}, 2000);
	}, []);

	return (
		<div>
			<NpcSheet
				pageName={pageName}
				npc={npc}
				setNpc={setNpc}
				handleGenerate={handleGenerate}
			/>
		</div>
	);
};

export default RandomNpcSheet;
