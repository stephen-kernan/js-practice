import { dataTypes } from "../../challenges/week0/1-dataTypes.ts";

describe("0.1 - Datatypes", () => {
  it("example", () => {
    expect(dataTypes).not.toBeNull();
  });

  if (dataTypes.string) {
    it("string", () => {
      expect(typeof dataTypes.string).toBe("string");
    });
  }

  if (dataTypes.string) {
    it("number", () => {
      expect(typeof dataTypes.number).toBe("number");
    });
  }

  if (dataTypes.string) {
    it("boolean", () => {
      expect(typeof dataTypes.boolean).toBe("boolean");
    });
  }

  if (dataTypes.string) {
    it("array", () => {
      expect(Array.isArray(dataTypes.array)).toBeTruthy();
    });
  }

  if (dataTypes.object) {
    it("object", () => {
      expect(
        typeof dataTypes.object === "object"
      ).toBeTruthy();
    });
  }
});
