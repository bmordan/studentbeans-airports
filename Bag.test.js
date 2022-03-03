const Bag = require('./Bag')

describe("Bag class", () => {
    test("bag has a weight", () => {
        const bag = new Bag(25)
        expect(bag.weight).toBe(25)
    })
})