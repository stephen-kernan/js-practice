import { findFirstItemInList } from "../../challenges/week1/6-firstItemInList";

describe.skip("finds first item in a list", () => {
  const testList = ["Demon Slayer", "Jujutsu Kaisen"];
  it("returns the first item of a list with multiple items", () => {
    expect(findFirstItemInList(testList)).toBe(testList[0]);
  });

  it("returns the first item of a list with one items", () => {
    expect(findFirstItemInList([testList[0]])).toBe(testList[0]);
  });

  it('returns "Error processing data" if no input provided', () => {
    expect(findFirstItemInList()).toBe("Error processing data");
  });

  it('returns "Error processing data" if non-string provided', () => {
    expect(findFirstItemInList(1)).toBe("Error processing data");
  });
});
