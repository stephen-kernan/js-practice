import { capitalizeWord } from "../../challenges/week1/4-capitalizeWord";


describe.skip("finds first letter in a word", () => {
  it("returns the capitalized word is uncapitalized", () => {
    expect(capitalizeWord("gnarly")).toBe("Gnarly");
  });

  it("returns the capitalized word is capitalized", () => {
    expect(capitalizeWord("Gnarly")).toBe("Gnarly");
  });

  it('returns "Error processing data" if no input provided', () => {
    expect(capitalizeWord()).toBe("Error processing data");
  });

  it('returns "Error processing data" if non-string provided', () => {
    expect(capitalizeWord(1)).toBe("Error processing data");
  });
});
