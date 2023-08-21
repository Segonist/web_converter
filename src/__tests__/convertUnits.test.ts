import convertUnits from "../utils/convertUnits";

describe("convertions work right", () => {
	it("distance", () => {
		expect(convertUnits("distance", "km", "cm", "1.3")).to.equal("130000");
		expect(convertUnits("distance", "m", "dm", "856")).to.equal("8560");
		expect(convertUnits("distance", "dm", "mm", "25.6")).to.equal("2560");
		expect(convertUnits("distance", "cm", "km", "568264")).to.equal("5.68264");
		expect(convertUnits("distance", "mm", "m", "874065")).to.equal("874.065");
	});
	it("weight", () => {
		expect(convertUnits("weight", "t", "kg", "2.5")).to.equal("2500");
		expect(convertUnits("weight", "kg", "mg", "2.86")).to.equal("2860000");
		expect(convertUnits("weight", "g", "t", "646257000")).to.equal("646.257");
		expect(convertUnits("weight", "mg", "g", "64598")).to.equal("64.598");
	});

	it("if just minus presented", () => {
		expect(convertUnits("distance", "km", "m", "-")).to.equal("-");
	});
	it("if last symbol in inputValue is dot", () => {
		expect(convertUnits("distance", "km", "m", "3.")).to.equal("3000.");
	});
});
