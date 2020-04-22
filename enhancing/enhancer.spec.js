const enhancer = require('./enhancer.js');
// test away!
describe("enhancer.js", function() {
    it("should run all tests without error", () => {
        expect(true).toBe(true);
    });
    describe(".succeed(item)", () => {
        it.todo("succeed(item) should return a new item with the same info as item argument, but with item.enhancement increased by 1 (max 20)");
    });
    describe(".fail(item)", () => {
        it.todo(".fail(item) should return a new item. If item.enhancement < 15, item.durability -= 5; if item.enhancement >= 15, item.durability -= 10; if item.enhancement > 16, item.enhancement -= 1");
    });
    describe(".repair(item)", () => {
        it("should return a new item with durability increased to 100", () => {
            expect(enhancer.repair({
                name: "bardiche-guisarme",
                durability: 73,
                enhancement: 0
            })).toEqual({
                name: "bardiche-guisarme",
                durability: 100,
                enhancement: 0
            });
        });
    });
    describe(".get(item)", () => {
        it.todo(".get(item) returns a new item with name edited to be same if enhancement = 0, [+<enhancement>] <name> if enhancement > 0");
    });
});