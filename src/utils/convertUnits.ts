import bigDecimal from "js-big-decimal";

const units: { [index: string]: any } = {
	distance: {
		km: 1000000,
		m: 1000,
		dm: 100,
		cm: 10,
		mm: 1,
	},
	weight: {
		t: 100000000,
		kg: 100000,
		g: 1000,
		mg: 1,
	},
};

const convertUnits = (
	convertionType: string,
	inputUnit: string,
	outputUnit: string,
	inputValue: string
) => {
	var result = bigDecimal.multiply(inputValue, units[convertionType][inputUnit]);
	result = bigDecimal.divide(result, units[convertionType][outputUnit]);
	result = parseFloat(result).toString();
	return result;
};

export default convertUnits;
