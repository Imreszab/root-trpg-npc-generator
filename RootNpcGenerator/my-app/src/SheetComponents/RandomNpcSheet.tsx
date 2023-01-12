import React, { useRef } from "react";
import NpcSheet from "./NpcSheet";
import { useEffect, useState } from "react";
import { Npc, NpcBase, starterNpc } from "./Types";
import { getNameOfDeclaration } from "typescript";

const RandomNpcSheet = () => {
	const npc = useRef<Npc>(starterNpc);
	const [generate, setGenerate] = useState<boolean>(false);
	let pageName: string = "Generate Npc";

	const handleGenerate = () => {
		setGenerate(!generate);
	};

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
				npc.current = await response.json();
				console.log(npc.current);
			} catch (err) {
				console.log(err);
			}
		};
		setTimeout(() => {
			(async () => await getName())();
		}, 2000);
	}, [handleGenerate]);

	return (
		<div>
			<NpcSheet
				pageName={pageName}
				npc={npc.current}
				handleGenerate={handleGenerate}
			/>
		</div>
	);
};

export default RandomNpcSheet;
