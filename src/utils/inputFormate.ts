const inputFormate = (input: string) => {
	if (input.length < 1) {
		// in case someone try to clear the input
		return "0";
	}
	if (input == "-0") {
		// your math have -0??? my not
		return "-";
	}
	if (parseFloat(input).toString() == input) {
		// if there is just number in input, and nothing extraordinal
		return input;
	}
	if (input == "NaN") {
		// errors just wanishing input
		return "0";
	}
	var formatedInput = input;
	if (formatedInput.length > 1 && formatedInput.startsWith("0") && /[1-9]/.test(formatedInput)) {
		// if number starts on 0 (it shouldn't btw)
		// third && checks if other value is not a literal
		formatedInput = formatedInput.slice(1);
	}
	if (formatedInput.startsWith(".")) {
		// if number starts on dot (i know that in your math it means 0. but not in mine lol)
		formatedInput = formatedInput.slice(1);
	}
	if (formatedInput.startsWith("-.")) {
		// -0. ? maybe but nope
		formatedInput = "-" + formatedInput.slice(2);
	}
	var matches = formatedInput.match(/(\.)/g); // just to know how many dots in there
	if (matches) {
		for (let i = 0; i < matches.length - 1; i++) {
			// deleting all dot's except the first one
			let lastIndex = formatedInput.lastIndexOf(".");
			formatedInput =
				formatedInput.substring(0, lastIndex) +
				(lastIndex == formatedInput.length ? "" : formatedInput.substring(lastIndex + 1));
		}
	}
	const re = /(?<!^)-|[^0-9-.]/g;
	if (re.test(formatedInput)) {
		// replaces all characters that are not hyphens/dots at first position and not a number
		formatedInput = formatedInput.replaceAll(re, "");
	}
	return formatedInput;
};

export default inputFormate;
