import {
  answer,
  carvedCorrectly,
  testString,
} from "../../challenges/week0/2-strings";

describe("0.2 - Strings", () => {
  it("example", () => {
    expect(testString).toBe("I see dead people");
  });
  if (answer.lowerCase !== undefined) {
    it("howManyCharacters", () => {
      expect(answer.howManyCharacters).toBe(17);
    });
  }

  if (answer.lowerCase !== undefined) {
    it("fifthCharacter", () => {
      expect(answer.fifthCharacter).toBe("e");
    });
  }

  if (answer.lowerCase !== undefined) {
    it("upperCase", () => {
      expect(answer.upperCase).toBe("I SEE DEAD PEOPLE");
    });
  }

  if (answer.lowerCase !== undefined) {
    it("lowerCase", () => {
      expect(answer.lowerCase).toBe("i see dead people");
    });
  }

  if (answer.lowerCase !== undefined) {
    it("carvedUp", () => {
      expect(carvedCorrectly).toBeTruthy();
    });
  }

  if (answer.lowerCase !== undefined) {
    it("itsAliveee", () => {
      expect(answer.itsAliveee).toBe("I see living people");
    });
  }
});
