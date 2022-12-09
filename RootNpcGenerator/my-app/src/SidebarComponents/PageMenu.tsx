import React from "react";

type ContentProps = { handleGenerate: Function; pageName: string };

const PageMenu = ({ handleGenerate, pageName }: ContentProps) => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-title"> {pageName}</div>
			<div className="navbar">
				<button className="sub-btn" onClick={() => handleGenerate()}>
					Generate New Npc
				</button>
			</div>
		</div>
	);
};

export default PageMenu;
