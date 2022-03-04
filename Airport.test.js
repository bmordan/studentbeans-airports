const Airport = require('./Airport')

describe("Airport", () => {
    beforeEach(() => {
        Airport.allAirports = {}
    })

    test("airport has info", async () => {
        const airport = new Airport("QQD")
        const info = await airport.getInfo()
        expect(info.city).toBe("Dover")
    })
    test("airports know about each other", () => {
        const airport = new Airport("LHR")
        const other_airport = new Airport("LAX")
        expect(typeof Airport.allAirports).toBe('object')
        expect(airport.allAirports).toBeFalsy()
        expect(Airport.allAirports.LAX instanceof Airport).toBeTruthy()
        expect(Airport.allAirports.LAX).toEqual(other_airport)
    })
    test("airports know about each other", () => {
        const airport = new Airport("BEL")
        const other_airport = new Airport("GAT")
        expect(Object.keys(Airport.allAirports).length).toBe(2)
    })
})