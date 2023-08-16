const units: { [index: string]: any } = {
	distance: {
		km: 1000,
		m: 1,
		dm: 0.1,
		cm: 0.01,
		mm: 0.001,
	},
	weight: {
		t: 1000,
		kg: 1,
		g: 0.001,
		mg: 0.000001,
	},
};

const convertUnits = (
	convertion_type: string,
	input_unit: string,
	output_unit: string,
	input_value: number
) => {
	var result = input_value * units[convertion_type][input_unit];
	result /= units[convertion_type][output_unit];
	return result;
};

export default convertUnits;
