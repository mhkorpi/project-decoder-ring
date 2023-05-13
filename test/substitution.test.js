const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should maintain spaces", () => {
        const message = "a b c d e";
        const alphabet = "!@#$%qwertyuiopasdfghjklzx"
        const expected = "! @ # $ %";
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "A b C d E f";
        const alphabet = "!@#$%qwertyuiopasdfghjklzx"
        const expected = "! @ # $ % q";
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should return false if alphabet parameter is not exactly 26 characters in length", () => {
        const message = "message";
        const alphabet = "asdflkjpoiuq";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if a character appears more than once in alphabet parameter", () => {
        const message = "message";
        const alphabet = "abcdefghijklmnopqrstuvwxya";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should decode a message by using the given substitution alphabet", () => {
        const message = "p89o 9o p85 e5oo175";
        const alphabet = "1234567890qwertyuiopasdfgh";
        const actual = substitution(message, alphabet, false);
        const expected = "this is the message";
    });
});