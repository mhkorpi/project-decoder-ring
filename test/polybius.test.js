const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it("should return a string when encoding", () => {
        const message = "Hello, my name is Michael!";
        const actual = polybius(message);
        expect(actual).to.be.a("string");
    });

    it("should return a string when decoding", () => {
        const message = "3251131343 2345 33112351 4234 23423132115113";
        const actual = polybius(message, false);
        expect(actual).to.be.a("string");
    });

    it("should return false when decoding if the number of characters in the string excluding spaces is odd", () => {
        const message = "3251131343 2345 33112351 4234 2342312115113";
        const actual = polybius(message, false);
        expect(actual).to.be.false;
    });

    it("should maintain spaces", () => {
        const message = "a b c d e";
        const actual = polybius(message);
        const expected = "11 21 31 41 51";
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = polybius("abcdefghijklmnopqrstuvwxyz")
        const actual = polybius("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(actual).to.equal(expected);
    });

    it("should encode both I and J to 42", () => {
        const message = "i j";
        const actual = polybius(message);
        const expected = "42 42";
        expect(actual).to.equal(expected);
    });

    it("should decode 42 to (i/j)", () => {
        const message = "424242";
        const actual = polybius(message, false);
        const expected = "(i/j)(i/j)(i/j)"
        expect(actual).to.equal(expected);
    });
});