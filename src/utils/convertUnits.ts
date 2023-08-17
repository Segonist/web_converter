import bigDecimal from "js-big-decimal";
import * as unitsMultipliers from "../data/unitsMultipliers.json";

const units: { [index: string]: any } = unitsMultipliers;

const convertUnits = (
	convertionType: string,
	inputUnit: string,
	outputUnit: string,
	inputValue: string
) => {
	// the input number is multiplied by the appropriate multiplier to obtain a number in units with a multiplier of 1 (see assets/unitsMultipliers.json)
	var result = bigDecimal.multiply(inputValue, units[convertionType][inputUnit]);
	// then it is multiplied by the appropriate multiplier to convert to the requested unit
	result = bigDecimal.divide(result, units[convertionType][outputUnit]);
	// for some reasone, bigDecimal.divide() function returns something like 1.000000000, so this line formats it
	result = parseFloat(result).toString();
	return result;
};

export default convertUnits;
