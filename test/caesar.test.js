// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() ", () => {
    it("should return false if the shift value isn't present", () => {
        const message = "Hello, my name is Michael!";
        const actual = caesar(message);
        expect(actual).to.be.false;
    });

    it("should return false if the shift values is equal to 0", () => {
        const message = "Hello, my name is Michael!";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift value is less than -25", () => {
        const message = "Hello, my name is Michael!";
        const shift = -26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift value is greater than 25", () => {
        const message = "Hello, my name is Michael!";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });

    it("should maintain spaces and other non-alphabetic symbols", () => {
        const message = "Hello, my name is Michael!";
        const shift = 3;
        const expected = "khoor, pb qdph lv plfkdho!"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "Hello, my name is Michael!";
        const shift = 3;
        const expected = "khoor, pb qdph lv plfkdho!"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });

    it("should wrap to front of alphabet if shift goes past the letter Z", () => {
        const message = "xyz";
        const shift = 6;
        const expected = "def"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });

    it("should wrap to end of alphabet if negative shift goes past letter A", () => {
        const message = "def";
        const shift = -6;
        const expected = "xyz";
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });

    it("should shift letters in opposite direction if decode option is selected", () => {
        const message = "abcdefg"
        const shift = 6;
        const expected = "uvwxyza"
        const actual = caesar(message, shift, false);
        expect(actual).to.equal(expected);
    });
});