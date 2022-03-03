const Airport = require('./Airport')

describe("Airport", () => {
    test("airport has info", (done) => {
        const airport = new Airport("QQD")
        airport.getInfo((info) => {
            expect(info.city).toBeTruthy()
            expect(info.city).toBe("Dover")
            done()
        })
    })
})