const utils = require("../src/main");

describe("Numerology Calculator", function () {
    it(">>> Expect nothing here", function () { expect().nothing() });
    it(">>> Convert name TU to array [2.0, 3.0].", function() {
        expect(utils.nameToInteger("TU")).toEqual([2, 3]);
    });
    it(">>> Expect moduloNumber(10, 9) return 1.", function() {
        expect(utils.moduloNumber(10, 9)).toEqual(1);
    });
});