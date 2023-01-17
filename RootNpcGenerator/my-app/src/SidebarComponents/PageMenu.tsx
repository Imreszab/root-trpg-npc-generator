import React from "react";

type ContentProps = {
	handleGenerate: Function;
	pageName: string;
	handleSave: Function;
};

const PageMenu = ({ handleGenerate, pageName, handleSave }: ContentProps) => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-title"> {pageName}</div>
			<div className="navbar">
				<button className="sub-btn" onClick={() => handleGenerate()}>
					Generate New Npc
				</button>
				<button className="sub-btn" onClick={() => handleSave()}>
					Save Npc
				</button>
			</div>
		</div>
	);
};

export default PageMenu;
