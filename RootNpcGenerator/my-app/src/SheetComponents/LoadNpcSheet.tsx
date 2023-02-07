import React from "react";
import NpcSheet from "./NpcSheet";
import { useEffect, useState, useRef } from "react";
import { Npc, NpcSheetProps, starterNpc } from "./Types";

const LoadNpcSheet = () => {
	const npcs = useRef<Npc[]>([]);
	const selectedNpc = useRef<Npc>(starterNpc);
	const [select, setSelect] = useState<boolean>(false);

	const handleSelect = (Id: number) => {
		selectedNpc.current = npcs.current[Id];
		setSelect(!select);
	};
	const [hasNpcs, sethasNpcs] = useState<boolean>(false);

	const handleSave = async () => {
		//refactor for update needed

		let url: string = "https://localhost:7123/api/Npc/save/random";
		try {
			const response: Response = await fetch(url, {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: JSON.stringify(selectedNpc.current),
			});
			if (response.ok) {
				console.log(response);
			}
			if (!response.ok) throw Error("Did not receive expected data");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const getNpc = async () => {
			let url: string = "https://localhost:7123/api/Npc/get/all";
			try {
				const response: Response = await fetch(url, {
					method: "GET",
					headers: {
						Accept: "application/json",
					},
				});
				if (!response.ok) throw Error("Did not receive expected data");
				npcs.current = await response.json();
				console.log(npcs.current);
			} catch (err) {
				console.log(err);
			}
		};
		setTimeout(() => {
			(async () => await getNpc())();
		}, 2000);
	}, []);

	const props: NpcSheetProps = {
		pageName: "Load Npc",
		npc: selectedNpc.current,
		npcs: npcs.current,
		handleFunction: handleSelect,
		handleSave: handleSave,
	};

	return (
		<div>
			<NpcSheet props={props} />
		</div>
	);
	return <></>;
};

export default LoadNpcSheet;
