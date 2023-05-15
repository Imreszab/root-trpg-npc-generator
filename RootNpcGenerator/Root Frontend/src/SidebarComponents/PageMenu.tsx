import React, { useState } from "react";
import { SheetProps } from "../SheetComponents/Types";
import Button from "./Button";

const PageMenu = ({ props }: SheetProps) => {
	if (props.npcs === undefined) {
		return (
			<div className="sidebar-container">
				<div className="sidebar-title"> {props.pageName}</div>
				<div className="navbar">
					<Button
						handleFunction={props.handleFunction}
						title={"Generate New Npc"}
					/>
					<Button handleFunction={props.handleSave} title={"Save Npc"} />
				</div>
			</div>
		);
	} else {
		return props.npcs === null ? (
			<p>"Loading..."</p>
		) : (
			<div className="sidebar-container">
				<div className="sidebar-title"> {props.pageName}</div>
				<div className="navbar">
					{props.npcs.map((npc) => {
						return (
							<>
								<Button
									key={npc.Id}
									handleFunction={props.handleFunction}
									title={npc.name}
									id={npc.Id}
								/>
							</>
						);
					})}

					<Button handleFunction={props.handleSave} title={"Save Npc"} />
				</div>
			</div>
		);
	}
};

export default PageMenu;
