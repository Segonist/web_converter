import { useState } from "react";
import { useUpdateValueObject, useValueObject } from "../ValueContext";

const ValueInput = () => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const [newValueObject, setNewValueObject] = useState(valueObject);
	const onInputChange = (event: any) => {
		setNewValueObject({ numericValue: event.target.value, unit: "m" });
		updateValueObject(newValueObject);
	};

	return (
		<div className="ValueInput">
			<input
				type="number"
				onChange={onInputChange}
				value={newValueObject.numericValue}
			/>
			<span></span>
		</div>
	);
};

export default ValueInput;
