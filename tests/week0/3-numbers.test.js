import { answer } from "../../challenges/week0/3-numbers";

describe("0.3 - Numbers", () => {
  it("isNotNumber", () => {
    expect(answer.isNotNumber).toBeFalsy();
  });

  it("isWholeNumber", () => {
    expect(answer.isWholeNumber).toBeFalsy();
  });

  it("toString", () => {
    expect(answer.toString).toEqual("5.25");
  });

  it("oneDecimal", () => {
    expect(answer.oneFixedDecimal).toEqual("5.3");
  });
});
