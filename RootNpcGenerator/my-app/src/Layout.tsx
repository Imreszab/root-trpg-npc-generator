import React from "react";
import Sidebar from "./SidebarComponents/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className=" app-grid-container">
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default Layout;
