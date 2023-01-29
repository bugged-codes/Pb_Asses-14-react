import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HocClickCounter from "./components/HOC/HocClickCounter";
import HocHoverCounter from "./components/HOC/HocHoverCounter";
import HoverCounter from "./components/HoverCounter";

export default function App() {
	return (
		<div className="App-div">
			<h1>Pure component and HOC in React.</h1>
			<div className="flex-container">
				<div className="simpleCounter-div flex-child">
					<h2>Simple Counters on click and on mouse hover created by writing same logical code twice.</h2>
					<ClickCounter />
					<HoverCounter />
				</div>
				<div className="hocCounter-div flex-child">
					<h2>Counters made with HOC by using single increment logic for multiple counters.</h2>
					<HocClickCounter />
					<HocHoverCounter />
				</div>
			</div>
			<div className="message-div">
				So, if the counter logic had to be changed from incrementing to decrementing or any other arithmetic operation, when using HOC I would have to change that logic only once without having to worry about the number of components.
				<br />
				But, when not using HOC's we'd need to update the logic in each counter component.
			</div>
		</div>
	);
}
