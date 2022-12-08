import React from "react";

type ContentProps = { handleGenerate: any };

const PageMenu = ({ handleGenerate }: ContentProps) => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-title"> Name Of The Page you are on</div>
			<div className="navbar">
				<button className="generate-btn" onClick={() => handleGenerate()}>
					Generate New Npc
				</button>
			</div>
		</div>
	);
};

export default PageMenu;
