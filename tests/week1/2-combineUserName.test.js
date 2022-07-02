import { combineUserName } from "../../challenges/week1/2-combineUserName";


describe.skip("combines a user's first and last name", () => {
  it("returns the combined name", () => {
    expect(combineUserName("Sly", "Cooper")).toBe("Sly Cooper");
  });

  it('returns "Error processing data" if no input provided', () => {
    expect(combineUserName()).toBe("Error processing data");
  });

  it('returns "Error processing data" if non-string provided', () => {
    expect(combineUserName("Sly", 1)).toBe("Error processing data");
  });
});
