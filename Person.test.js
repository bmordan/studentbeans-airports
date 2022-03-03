const Person = require('./Person')
const Bag = require('./Bag')

describe("Person class", () => {
    test("has a name", () => {
        const person = new Person("Dawid")
        expect(person.name).toBe("Dawid")
    })
    test("has an age", () => {
        const Lucas = new Person("Lucas 🍹", 22)
        expect(Lucas.age).toBe(22)
        expect(Lucas.age).toBeGreaterThan(18)
        expect(typeof Lucas.age).toEqual('number')
    })
    test("age must be a number", () => {
        const Loreto = new Person("Loreto", "does not want to say")
        expect(Loreto.age).toBe(0)
    })
    test("must have a name", () => {
        expect(() => new Person()).toThrow()
    })
})

describe("Person and Bag", () => {
    test("a person can have a bag", () => {
        const person = new Person("Bob", 45)
        const bag = new Bag(25)
        person.addBag(bag)
        expect(person.bags[0].weight).toBe(25)
        person.addBag(new Bag(12))
        expect(person.bags[1].weight).toBe(12)
    })

    test("a person can hand over a bag", () => {
        const person = new Person("Bob", 45)
        const bag = new Bag(25)
        expect(person.bags.length).toBe(0)
        person.addBag(bag)
        expect(person.bags.length).toBe(1)
        expect(person.getBag()).toEqual(bag)   
    })

    test("a person should only have bags as bags", () => {
        const person = new Person("Bob", 45)
        const notABag = Symbol("NO BAG HERE")
        const bag = new Bag(13)
        
        expect(typeof notABag).toBe('symbol')
        expect(() => person.addBag(notABag)).toThrow()
        expect(() => person.addBag(notABag)).toThrowError("Only Bags please")
    })
})