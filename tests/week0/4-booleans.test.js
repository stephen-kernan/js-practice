import {
  answer,
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  isHonestlyNevermindMid,
} from "../../challenges/week0/4-booleans";

describe("0.4 - Booleans", () => {
  it("example", () => {
    expect(isHonestlyNevermindMid).toBeTruthy();
  });
  if (answer.questionOne) {
    it("questionOne", () => {
      expect(answer.questionOne).toBe(questionOne);
    });
  }
  if (answer.questionOne) {
    it("questionTwo", () => {
      expect(answer.questionTwo).toBe(questionTwo);
    });
  }
  if (answer.questionOne) {
    it("questionThree", () => {
      expect(answer.questionThree).toBe(questionThree);
    });
  }
  if (answer.questionOne) {
    it("questionFour", () => {
      expect(answer.questionFour).toBe(questionFour);
    });
  }
  if (answer.questionOne) {
    it("questionFive", () => {
      expect(answer.questionFive).toBe(questionFive);
    });
  }
  if (answer.questionOne) {
    it("questionSix", () => {
      expect(answer.questionSix).toBe(questionSix);
    });
  }
  if (answer.questionOne) {
    it("questionSeven", () => {
      expect(answer.questionSeven).toBe(questionSeven);
    });
  }
});
