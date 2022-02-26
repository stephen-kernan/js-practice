import { findFirstFiveItemsInList } from "../../challenges/week1/7-firstFiveItemsInList";

describe("finds first five items in list", () => {
  const testList = [
    "Demon Slayer",
    "Jujutsu Kaisen",
    "Naruto",
    "Attack on Titan",
    "Fullmetal Alchemist: Brotherhood",
    "Hunter x Hunter",
    "Death Note",
    "Bleach",
    "One Punch Man",
    "Inuyasha",
  ];
  it("returns the first five items of a list with 5+ items", () => {
    expect(findFirstFiveItemsInList(testList)).toEqual(testList.slice(0, 5));
  });

  it("returns all items of a list with less than 5 items", () => {
    expect(findFirstFiveItemsInList(testList.slice(7))).toEqual(
      testList.slice(7)
    );
  });

  it('returns "Error processing data" if no input provided', () => {
    expect(findFirstFiveItemsInList()).toBe("Error processing data");
  });

  it('returns "Error processing data" if non-string provided', () => {
    expect(findFirstFiveItemsInList(1)).toBe("Error processing data");
  });
});
