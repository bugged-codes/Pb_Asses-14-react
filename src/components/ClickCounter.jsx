import React, { useState } from "react";

const ClickCounter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};
	return (
		<div className="pureCounter clickCounter">
			<center>
				<h3>{count}</h3>
				<button onClick={handleIncrement}>Click to Increment by 1</button>
			</center>
		</div>
	);
};

export default ClickCounter;
