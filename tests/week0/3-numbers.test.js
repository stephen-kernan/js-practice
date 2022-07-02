import { answer, testNumber } from "../../challenges/week0/3-numbers";

describe("0.3 - Numbers", () => {
  it("example", () => {
    expect(testNumber).toBe(5.25);
  });

  if (answer.isNotNumber !== undefined) {
    it("isNotNumber", () => {
      expect(answer.isNotNumber).toBeFalsy();
    });
  }

  if (answer.isWholeNumber !== undefined) {
    it("isWholeNumber", () => {
      expect(answer.isWholeNumber).toBeFalsy();
    });
  }

  if (answer.toString !== undefined) {
    it("toString", () => {
      expect(answer.toString).toEqual("5.25");
    });
  }

  if (answer.oneFixedDecimal !== undefined) {
    it("oneDecimal", () => {
      expect(answer.oneFixedDecimal).toEqual("5.3");
    });
  }
});
