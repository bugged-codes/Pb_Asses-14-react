import React from "react";
import LogicCounter from "./LogicCounter";

const HocClickCounter = (props) => {
	// const [newCount, newIncrement] = this.props;
	return (
		<div className="hocCounter clickCounter">
			<center>
				<h3>{props.newVar}</h3>
				<button onClick={props.handleIncrement}>Click to Increment by 1</button>
			</center>
		</div>
	);
};

export default LogicCounter(HocClickCounter);
