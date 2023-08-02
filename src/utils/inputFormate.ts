import betterParseFloat from "./betterParseFloat";

const inputFormate = (input: string) => {
	var formatedInput = betterParseFloat(input).toString();
	if (input.length < 1) {
		formatedInput = "0";
	}
	if (formatedInput == "NaN") {
		return "0";
	}
	return formatedInput;
};

export default inputFormate;
