import inputFormate from "../utils/inputFormate";

describe("inputFormate work as intended", () => {
	it("nothing extraordinal just returns input", () => {
		expect(inputFormate("1234")).toBe("1234");
	});
	it("zero lenght or spaces return 0", () => {
		expect(inputFormate("")).toBe("0");
		expect(inputFormate(" ")).toBe("0");
		expect(inputFormate("    ")).toBe("0");
	});
	it("-0 return -", () => {
		expect(inputFormate("-0")).toBe("-");
	});
	it("NaN value returns 0", () => {
		expect(inputFormate("NaN")).toBe("0");
	});
	it("any text just wanishes", () => {
		expect(inputFormate("2j345j")).toBe("2345");
		expect(inputFormate("k0")).toBe("0");
		expect(inputFormate("0f")).toBe("0");
	});
	it("formated number doesn't have 0 as first digit", () => {
		expect(inputFormate("012")).toBe("12");
	});
	it("dot shouldn't be first in string", () => {
		expect(inputFormate(".0")).toBe("0");
		expect(inputFormate(".1234")).toBe("1234");
	});
	it("-. wanishes dot", () => {
		expect(inputFormate("-.1234")).toBe("-1234");
	});
	it("if too many dots presented", () => {
		expect(inputFormate("12.34.567")).toBe("12.34567");
		expect(inputFormate("12.34.567.")).toBe("12.34567");
		expect(inputFormate("1.2.34.56.7")).toBe("1.234567");
	});
	it("dot at the end of string remains", () => {
		expect(inputFormate("1234.")).toBe("1234.");
	});
	it("", () => {});
	it("", () => {});
});
