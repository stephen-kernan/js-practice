import { answer, carvedCorrectly } from "../../challenges/week0/2-strings";

describe("0.2 - Strings", () => {
  it("howManyCharacters", () => {
    expect(answer.howManyCharacters).toBe(5);
  });

  it("fifthCharacter", () => {
    expect(answer.fifthCharacter).toBe("e");
  });

  it("upperCase", () => {
    expect(answer.upperCase).toBe("I SEE DEAD PEOPLE");
  });

  it("lowerCase", () => {
    expect(answer.lowerCase).toBe("i see dead people");
  });

  it("carvedUp", () => {
    expect(carvedCorrectly).toBeTruthy();
  });

  it("itsAliveee", () => {
    expect(answer.itsAliveee).toBe("I see living people");
  });
});
