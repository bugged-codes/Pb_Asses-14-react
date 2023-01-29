import React from "react";
import LogicCounter from "./LogicCounter";

const HocHoverCounter = (newCount, newIncrement) => {
	// const [newCount, newIncrement] = this.props;

	<div className="pureCounter hoverCounter">
		<center>
			<h3>{newCount.newVar}</h3>
			<button onMouseOver={newIncrement.HandleIncrement}>Hover to Increment by 1</button>
		</center>
		console.log(newIncrement);
	</div>;
};

export default LogicCounter(HocHoverCounter);
