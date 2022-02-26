import { createSum } from "../../challenges/week1/1-createSum";

describe("adds the sum of two numbers", () => {
  it("returns the sum of two numbers", () => {
    expect(createSum(1, 2)).toBe(3);
  });

  it('returns "Error processing data" if no input provided', () => {
    expect(createSum()).toBe("Error processing data");
  });

  it('returns "Error processing data" if non-number provided', () => {
    expect(createSum("bad", "data")).toBe("Error processing data");
  });
});
