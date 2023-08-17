import { useEffect, useState } from "react";
import { useUpdateValueObject, useValueObject } from "../context/ValueContext";
import DropdownMenu from "./DropdownMenu";
import inputFormate from "../utils/inputFormate";
import convertUnits from "../utils/convertUnits";

const ValueInput = () => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const [inputValue, setInputValue] = useState("0");
	const [inputUnit, setInputUnit] = useState("m");
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// on each input change it formate it, then updates input element and context value
		var input = inputFormate(event.target.value);
		setInputValue(input);
		updateValueObject({
			numericValue: input,
			unit: inputUnit,
		});
	};

	useEffect(() => {
		// on receiving updated value it converts it, then updates input element
		var newValue = convertUnits(
			"distance",
			valueObject.unit,
			inputUnit,
			valueObject.numericValue
		);
		setInputValue(newValue);
	}, [valueObject]);

	const handleDropdownSelect = (item: string) => {
		setInputUnit(item);
	};

	return (
		<div className="ValueInput">
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<DropdownMenu
				elements={["m", "cm", "mm"]}
				width="50px"
				onSelect={handleDropdownSelect}
			/>
		</div>
	);
};

export default ValueInput;
