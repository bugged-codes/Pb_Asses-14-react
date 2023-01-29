import React, { useState } from "react";

const HoverCounter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};
	return (
		<div className="pureCounter hoverCounter">
			<center>
				<h3>{count}</h3>
				<button onMouseOver={handleIncrement}>Hover to Increment by 1</button>
			</center>
		</div>
	);
};

export default HoverCounter;
