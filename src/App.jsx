import React from "react";
import "./App.css";
import { FaGithub } from "react-icons/fa";
import clockimg from "./assets/clock-icon.png";
const App = () => {
	const handleDownloadClick = () => {
		const url =
			"https://mega.nz/file/VYMVBKbR#8TQmYNwXZB33ehfDY3zRKCDitKYTyzlVq_iDn3NMCCU";
		window.open(url, "_self");
	};
	const handleCredClick = () => {
		const url = "https://github.com/purplevarun";
		window.open(url, "_blank");
	};
	return (
		<div id="App">
			<div id="header-wrapper">
				<img src={clockimg} alt="" width={50} />
				<h1>The Reminder App</h1>
			</div>
			<button id="download-btn" onClick={handleDownloadClick}>
				Download
			</button>
			<div id="creds" onClick={handleCredClick}>
				<span id="cred-name">purplevarun</span>
				<FaGithub size={25} />
			</div>
		</div>
	);
};

export default App;
