import React from "react";
import NpcSheet from "./SheetComponents/NpcSheet";
import Sidebar from "./SidebarComponents/Sidebar";
import "./App.css";
import { useState } from "react";
import PageMenu from "./SidebarComponents/PageMenu";

function App() {
	const [generate, setGenerate] = useState<boolean>(true);

	const handleGenerate = () => {
		setGenerate(!generate);
	};

	return (
		<div className="App app-grid-container">
			<Sidebar />
			<NpcSheet />
			<PageMenu handleGenerate={handleGenerate} />
		</div>
	);
}

export default App;
