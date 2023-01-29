import React from "react";
import LogicCounter from "./LogicCounter";

const HocClickCounter = (newCount, newIncrement) => {
	// const [newCount, newIncrement] = this.props;
	return (
		<div className="hocCounter clickCounter">
			<center>
				<h3>{newCount.newVar}</h3>
				<button onClick={newIncrement.HandleIncrement}>Click to Increment by 1</button>
			</center>
		</div>
	);
};

export default LogicCounter(HocClickCounter);
