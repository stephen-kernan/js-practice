import {
  pets,
  firstAnswer,
  firstMethod,
  secondAnswer,
  secondMethod,
  thirdAnswer,
  thirdMethod,
  fourthAnswer,
  fourthMethod,
  firstQuestion,
} from "../../challenges/week0/5-arrays";

describe("0.5 - Arrays", () => {
  it("example", () => {
    expect(pets).toHaveLength(3);
  });

  if (firstAnswer.length > firstQuestion.length) {
    it("firstQuestion", () => {
      expect(firstAnswer.length - firstQuestion.length).toBeGreaterThan(1);
      expect(secondMethod).toBe("push");
    });
  }
  if (secondAnswer) {
    it("secondQuestion", () => {
      expect(secondAnswer).toBe(firstQuestion[firstQuestion.length - 1]);
      expect(secondMethod).toBe("pop");
    });
  }
  if (thirdAnswer) {
    it("thirdQuestion", () => {
      expect(thirdAnswer).toEqual([1, 2, 3, 10, 11, 12]);
      expect(secondMethod).toBe("concat");
    });
  }
  if (fourthAnswer) {
    it("fourthQuestion", () => {
      expect(fourthAnswer).toBe("Arrays are cool");
      expect(fourthMethod).toBe("join");
    });
  }
});
