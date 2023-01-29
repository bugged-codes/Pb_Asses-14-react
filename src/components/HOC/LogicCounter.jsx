import React, { useState } from "react";

const LogicCounter = (OriginalComponent) => {
	function NewComponent() {
		const [newVar, setNewVar] = useState(0);

		const HandleIncrement = () => {
			return setNewVar(newVar + 1);
		};

		return <OriginalComponent newVar={newVar} handleIncrement={HandleIncrement} />;
	}

	return NewComponent;
};

export default LogicCounter;
