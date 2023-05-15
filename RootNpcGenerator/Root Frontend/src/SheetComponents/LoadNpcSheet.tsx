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
	//const [hasNpcs, sethasNpcs] = useState<boolean>(false);

	const handleSave = async () => {
		//refactor for update needed

		let url: string =
			"http://localhost/root-trpg-npc-generator/RootNpcGenerator/RootNpcLara/public/api/npc/save-new";
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
			let url: string =
				"http://localhost/root-trpg-npc-generator/RootNpcGenerator/RootNpcLara/public/api/npc/get-all";
			try {
				const response: Response = await fetch(url, {
					method: "GET",
					headers: {
						Accept: "application/json",
					},
				});
				if (!response.ok) throw Error("Did not receive expected data");
				let message = await response.json();
				npcs.current = message.message;
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
};

export default LoadNpcSheet;
