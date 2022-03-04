const fs = require('fs')
const path = require('path')

class Airport {
    static allAirports = {}

    constructor(code) {
        this.code = code
        Airport.allAirports[code] = this
    }

    getInfo() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, 'airports.json'), (err, buffer) => {
                if (err) return reject(err)
                const info = JSON.parse(buffer.toString())
                .find(airport => airport.code === this.code)
                this.city = info.city
                resolve(info)
            })           
        })
    }

    takeOff(plane) {
        // plane.inBound "LAX"
        // remove this plane from this airport instance
        Airports.allAirports[plane.inBound].land(plane)

    }

    land(plane) {
        this.planes.push(plane)
    }
}

module.exports = Airport