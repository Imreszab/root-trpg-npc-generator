import React, { useRef } from "react";
import NpcSheet from "./NpcSheet";
import { useEffect, useState } from "react";
import { Npc, starterNpc } from "./Types";

const RandomNpcSheet = () => {
	const npc = useRef<Npc>(starterNpc);
	const [generate, setGenerate] = useState<boolean>(false);
	let pageName: string = "Generate Npc";

	const handleGenerate = () => {
		setGenerate(!generate);
	};

	const handleSave = async () => {
		let url: string = "https://localhost:7123/api/Npc/save/random";
		try {
			const response: Response = await fetch(url, {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: JSON.stringify(npc),
			});
			if (!response.ok) throw Error("Did not receive expected data");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const getNpc = async () => {
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
			(async () => await getNpc())();
		}, 2000);
	}, [handleGenerate]);

	return (
		<div>
			<NpcSheet
				pageName={pageName}
				npc={npc.current}
				handleGenerate={handleGenerate}
				handleSave={handleSave}
			/>
		</div>
	);
};

export default RandomNpcSheet;
