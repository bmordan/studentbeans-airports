class Person {
    constructor(name, age) {
        if (!name) throw new Error("You must pass in a name")
        this.name = name
        this.age = typeof age === 'number' ? age : 0
        this.bags = []
    }

    addBag(bag) { // Bag
        this.bags.push(bag)
    }
}

module.exports = Person