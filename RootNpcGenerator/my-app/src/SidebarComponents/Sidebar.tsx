import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-title"> Root The TRPG: Npc Generator</div>
			<div className="navbar">
				<Link to={"/"}>
					<button className="navbar-btn">Generate random Npc</button>
				</Link>
				<Link to={"/load-npc"}>
					<button className="navbar-btn">Load Npc</button>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
