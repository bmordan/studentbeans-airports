const Person = require('./Person')

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