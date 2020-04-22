const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", function () {
  it("should run all tests without error", () => {
    expect(true).toBe(true);
  });
  describe(".succeed(item)", () => {
    it("should return new item with enhancement increased by 1 (max 20)", () => {
      expect(
        enhancer.succeed({
          name: "flamberge",
          durability: 25,
          enhancement: 7,
        })
      ).toEqual({
        name: "flamberge",
        durability: 25,
        enhancement: 8,
      });
      expect(
        enhancer.succeed({
          name: "fork of horripilation",
          durability: 99,
          enhancement: 20,
        })
      ).toEqual({
        name: "fork of horripilation",
        durability: 99,
        enhancement: 20,
      });
    });
  });
  describe(".fail(item)", () => {
    it("should return new item: enhancement < 15 -> durability -5; enhancement >= 15 -> durability -= 10; enhancement > 16 -> enhancement -= 1", () => {
      expect(
        enhancer.fail({
          name: "voulge",
          durability: 50,
          enhancement: 5,
        })
      ).toEqual({
        name: "voulge",
        durability: 45,
        enhancement: 5,
      });
      expect(
        enhancer.fail({
          name: "skillet",
          durability: 77,
          enhancement: 15,
        })
      ).toEqual({
        name: "skillet",
        durability: 67,
        enhancement: 15,
      });
      expect(
        enhancer.fail({
          name: "MissingNo.",
          durability: 80,
          enhancement: 18,
        })
      ).toEqual({
        name: "MissingNo.",
        durability: 70,
        enhancement: 17,
      });
    });
  });
  describe(".repair(item)", () => {
    it("should return a new item with durability increased to 100", () => {
      expect(
        enhancer.repair({
          name: "bardiche-guisarme",
          durability: 73,
          enhancement: 0,
        })
      ).toEqual({
        name: "bardiche-guisarme",
        durability: 100,
        enhancement: 0,
      });
      expect(
        enhancer.repair({
          name: "spatula",
          durability: 100,
          enhancement: 13,
        })
      ).toEqual({
        name: "spatula",
        durability: 100,
        enhancement: 13,
      });
    });
  });
  describe(".get(item)", () => {
    it.todo(
      ".get(item) returns a new item with name edited to be same if enhancement = 0, [+<enhancement>] <name> if enhancement > 0"
    );
  });
});
