import { useEffect, useState } from "react";
import { useUpdateValueObject, useValueObject } from "../context/ValueContext";
import DropdownMenu from "./DropdownMenu";
import inputFormate from "../utils/inputFormate";
import convertUnits from "../utils/convertUnits";
import * as inputTypes from "../data/inputTypes.json";
const inputTypesDict: { [index: string]: any } = inputTypes;

interface Props {
	inputType: string;
}

const ValueInput = ({ inputType }: Props) => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const [inputValue, setInputValue] = useState("0");
	const defaultInputUnit = inputTypesDict[inputType][2];
	const [inputUnit, setInputUnit] = useState(defaultInputUnit);
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
			inputType,
			valueObject.unit,
			inputUnit,
			valueObject.numericValue
		);
		setInputValue(newValue);
	}, [valueObject]);

	const handleDropdownSelect = (item: string) => {
		// on changing dropdown unit it converts value of input, changes input and only then changes inputUnit var
		var newValue = convertUnits(inputType, inputUnit, item, inputValue);
		setInputValue(newValue);
		setInputUnit(item);
	};

	return (
		<div className="ValueInput">
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<DropdownMenu
				elements={inputTypesDict[inputType][0]}
				defaultElement={defaultInputUnit}
				width={`${inputTypesDict[inputType][1]}px`}
				onSelect={handleDropdownSelect}
			/>
		</div>
	);
};

export default ValueInput;
