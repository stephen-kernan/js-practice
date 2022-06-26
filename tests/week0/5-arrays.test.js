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
} from "../../challenges/week0/5-arrays";

describe("0.4 - Booleans", () => {
  it("firstQuestion", () => {
    expect(firstAnswer.length - firstQuestion.length).toBeGreaterThan(1);
    expect(secondMethod).toBe("push");
  });
  it("secondQuestion", () => {
    expect(secondAnswer).toBe(firstQuestion[firstQuestion.length - 1]);
    expect(secondMethod).toBe("pop");
  });
  it("thirdQuestion", () => {
    expect(thirdAnswer).toEqual([1, 2, 3, 10, 11, 12]);
    expect(secondMethod).toBe("concat");
  });
  it("fourthQuestion", () => {
    expect(fourthAnswer).toBe("Arrays are cool");
    expect(fourthMethod).toBe("join");
  });
});
