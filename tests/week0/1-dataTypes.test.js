import { dataTypes } from "../../challenges/week0/1-dataTypes.ts";

describe("0.1 - Datatypes", () => {
  it("string", () => {
    expect(typeof dataTypes.string).toBe("string");
  });

  it("number", () => {
    expect(typeof dataTypes.string).toBe("number");
  });

  it("boolean", () => {
    expect(typeof dataTypes.string).toBe("boolean");
  });

  it("array", () => {
    expect(Array.isArray(dataTypes.array)).toBeTruthy();
  });

  it("object", () => {
    expect(
      typeof dataTypes.object === "object" && Array.isArray(dataTypes.object)
    ).toBeTruthy();
  });
});
