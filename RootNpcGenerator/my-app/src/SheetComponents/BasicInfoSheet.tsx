import React from "react";
import { Race, Gender, Age, Faction } from "./Types";
import { useEffect, useRef } from "react";

const BasicInfoSheet = () => {
	const randomEnumValue = (enumeration: any) => {
		const values: string[] = Object.keys(enumeration);
		const enumKey: string = values[Math.floor(Math.random() * values.length)];
		return enumeration[enumKey];
	};

	const getFaction = (enumeration: any) => {
		if (randomRace === Race.Bird) {
			return Faction.EyrieDynasty;
		} else if (randomRace === Race.Cat) {
			return Faction.Marquisate;
		} else {
			return randomEnumValue(enumeration);
		}
	};
	const refName = useRef<string>("");
	const randomGender: Gender = randomEnumValue(Gender);

	useEffect(() => {
		const getName = async (gender: Gender) => {
			let url: string = "";
			if (gender === Gender.Male) {
				url = "/1?nameOptions=boy_names";
			} else if (gender === Gender.Female) {
				url = "/1?nameOptions=girl_names";
			} else {
				url = "/1";
			}

			try {
				const response: Response = await fetch(url, {
					method: "GET",
					headers: {
						Accept: "application/json",
					},
				});
				if (!response.ok) throw Error("Did not receive expected data");
				let name = await response.json();
				console.log(name[0]);
				refName.current = name[0];
				// console.log(domName);
			} catch (err) {
				console.log(err);
			}
		};
		setTimeout(() => {
			(async () => await getName(randomGender))();
		}, 2000);
	}, [randomGender]);

	//names[Math.floor(Math.random() * names.length)];
	const randomRace: Race = randomEnumValue(Race);
	const randomAge: Age = randomEnumValue(Age);
	const randomFaction: Faction = getFaction(Faction);

	return refName.current === "" ? (
		<p className="basic-info">"Loading..."</p>
	) : (
		<div className="card basic-info">
			<h2 className="card-title"> Basic information</h2>

			<label>Name: </label>
			<span>{refName.current}</span>
			<br />
			<label>Race: </label>
			<span>{randomRace}</span>
			<br />
			<label>Age: </label>
			<span>{randomAge}</span>
			<br />
			<label>Gender: </label>
			<span>{randomGender}</span>
			<br />
			<label>Faction: </label>
			<span>{randomFaction}</span>
		</div>
	);
};

export default BasicInfoSheet;
