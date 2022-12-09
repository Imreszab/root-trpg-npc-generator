import React from "react";
import RandomNpcSheet from "./SheetComponents/RandomNpcSheet";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadNpcSheet from "./SheetComponents/LoadNpcSheet";
import Layout from "./Layout";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<RandomNpcSheet />} />
						<Route path="/load-npc" element={<LoadNpcSheet />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
