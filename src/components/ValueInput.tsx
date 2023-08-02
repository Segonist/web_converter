import { useEffect, useState } from "react";
import { useUpdateValueObject, useValueObject } from "../ValueContext";
import DropdownMenu from "./DropdownMenu";
import inputFormate from "../utils/inputFormate";

const ValueInput = () => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		var input = inputFormate(event.target.value);
		setInputValue(input);
		updateValueObject({
			numericValue: input,
			unit: inputUnit,
		});
	};

	useEffect(() => {
		setInputValue(valueObject.numericValue);
	});

	const [inputUnit, setInputUnit] = useState("m");
	const handleDropdownSelect = (item: string) => {
		setInputUnit(item);
	};

	return (
		<div className="ValueInput">
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<DropdownMenu elements={["m", "cm", "mm"]} onSelect={handleDropdownSelect} />
		</div>
	);
};

export default ValueInput;
