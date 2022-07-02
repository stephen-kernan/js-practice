import {
  firstAnswer,
  firstMethod,
  secondAnswer,
  secondMethod,
  thirdAnswer,
  thirdMethod,
  fourthAnswer,
  fourthMethod,
  firstQuestion,
  car,
} from "../../challenges/week0/6-objects";

describe("0.6 - Objects", () => {
  it("example", () => {
    expect(car.year).toBe(2005);
  });

  if (firstAnswer.font) {
    it("firstQuestion", () => {
      expect(firstAnswer.font).not.toBeNull();
    });
  }

  if (secondAnswer) {
    it("secondQuestion", () => {
      expect(secondAnswer).toBe(firstAnswer.font);
    });
  }
  if (thirdAnswer) {
    it("thirdQuestion", () => {
      expect(thirdAnswer).toEqual(["firstKey", "secondKey", "thirdKey"]);
      expect(thirdMethod).toBe("keys");
    });
  }
  if (fourthAnswer) {
    it("fourthQuestion", () => {
      expect(fourthAnswer).toEqual([1, 2, 3]);
      expect(fourthMethod).toBe("values");
    });
  }
});
