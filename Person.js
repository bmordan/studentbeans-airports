const Bag = require('./Bag')

class Person {
    constructor(name, age) {
        if (!name) throw new Error("You must pass in a name")
        this.name = name
        this.age = typeof age === 'number' ? age : 0
        this.bags = []
    }

    addBag(bag) {
        if (bag instanceof Bag) this.bags.push(bag)
        else throw new Error("Only Bags please")
    }

    getBag() {
        return this.bags.pop()
    }
}

module.exports = Person