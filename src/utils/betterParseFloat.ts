const betterParseFloat = (string: string) => {
	// if judje only by productivity, it 100% suck in compare with parseFloat() function
	var parsedString = parseFloat(string);
	if (parsedString.toString() == string) {
		// if there is no parsing needed
		return parsedString;
	}
	if (string == "-0") {
		// your math have -0??? my not
		return "-";
	}
	if (string.length > 1 && string.startsWith("0") && /[1-9]/.test(string)) {
		// if number starts on 0 (it shouldn't btw)
		// third && checks if other value is not a literal
		string = string.slice(1);
	}
	if (string.startsWith(".")) {
		// if number starts on dot (i know that in your math it means 0. but not in mine lol)
		string = string.slice(1);
	}
	var matches = string.match(/(\.)/g); // just to know how many dot's in there
	if (matches) {
		for (let i = 0; i < matches.length - 1; i++) {
			// deleting all dot's except the first one
			let lastIndex = string.lastIndexOf(".");
			string =
				string.substring(0, lastIndex) +
				(lastIndex == string.length ? "" : string.substring(lastIndex + 1));
		}
	}
	const re = /(?<!^)-|[^0-9-.]/g;
	if (re.test(string)) {
		// replaces all characters that are not hyphens/dots at first position and not a number
		string = string.replaceAll(re, "");
	}
	return string; // it returns float or int, but who cares? ikr that it should return only float, but again, who cares?
};

export default betterParseFloat;
