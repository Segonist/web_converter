import { useState } from "react";
import { useUpdateValueObject, useValueObject } from "../ValueContext";
import DropdownMenu from "./DropdownMenu";

const ValueInput = () => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateValueObject({
			numericValue: event.target.value,
			unit: inputUnit,
		});
	};

	const [inputUnit, setInputUnit] = useState("m");
	const handleDropdownSelect = (item: string) => {
		setInputUnit(item);
	};

	return (
		<div className="ValueInput">
			<input
				type="number"
				onChange={onInputChange}
				value={parseFloat(valueObject.numericValue)}
			/>
			<DropdownMenu elements={["m", "cm", "mm"]} onSelect={handleDropdownSelect} />
		</div>
	);
};

export default ValueInput;
