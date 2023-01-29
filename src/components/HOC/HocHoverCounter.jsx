import React from "react";
import LogicCounter from "./LogicCounter";

const HocHoverCounter = (props) => {
	// const [newCount, newIncrement] = this.props;

	return (
		<div className="pureCounter hoverCounter">
			<center>
				<h3>{props.newVar}</h3>
				<button onMouseOver={props.handleIncrement}>Hover to Increment by 1</button>
			</center>
		</div>
	);
};

export default LogicCounter(HocHoverCounter);
