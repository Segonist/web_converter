import { useEffect, useState } from "react";
import { useUpdateValueObject, useValueObject } from "../context/ValueContext";
import DropdownMenu from "./DropdownMenu";
import inputFormate from "../utils/inputFormate";
import convertUnits from "../utils/convertUnits";
import * as inputTypes from "../data/inputTypes.json";
import { useConvertionType } from "../context/convertionTypeContext";
const inputTypesDict: { [index: string]: any } = inputTypes;

const ValueInput = () => {
	const valueObject = useValueObject();
	const updateValueObject = useUpdateValueObject();
	const convertionType = useConvertionType();

	const [inputValue, setInputValue] = useState("0");
	const [defaultInputUnit, setDefaultInputUnit] = useState(inputTypesDict[convertionType][2]);
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
			convertionType,
			valueObject.unit,
			inputUnit,
			valueObject.numericValue
		);
		setInputValue(newValue);
	}, [valueObject]);

	useEffect(() => {
		setDefaultInputUnit(inputTypesDict[convertionType][2]);
		setInputUnit(inputTypesDict[convertionType][2]);
		setInputValue("0");
		updateValueObject({ numericValue: "0", unit: inputTypesDict[convertionType][2] });
	}, [convertionType]);

	const handleDropdownSelect = (item: string) => {
		// on changing dropdown unit it converts value of input, changes input and only then changes inputUnit var
		var newValue = convertUnits(convertionType, inputUnit, item, inputValue);
		setInputValue(newValue);
		setInputUnit(item);
	};

	return (
		<div className="ValueInput">
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<DropdownMenu
				elements={inputTypesDict[convertionType][0]}
				defaultElement={defaultInputUnit}
				width={`${inputTypesDict[convertionType][1]}px`}
				onSelect={handleDropdownSelect}
			/>
		</div>
	);
};

export default ValueInput;
