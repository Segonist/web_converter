import { useState } from "react";
import { useUpdateValueObject, useValueObject } from "../ValueContext";

const ValueInput = () => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const [newValueObject] = useState(valueObject);
	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateValueObject({
			numericValue: event.target.value,
			unit: newValueObject.unit,
		});
	};

	return (
		<div className="ValueInput">
			<input
				type="number"
				onChange={onInputChange}
				value={parseFloat(valueObject.numericValue)}
			/>
			<span>{valueObject.unit}</span>
		</div>
	);
};

export default ValueInput;
