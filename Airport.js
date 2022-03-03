const fs = require('fs')
const path = require('path')

class Airport {
    constructor(code) {
        this.code = code
    }

    // getInfo(cb) {
    //     fs.readFile(path.join(__dirname, '..', 'airport-data.json'), (err, buffer) => {
    //         if (err) throw err
    //         const info = JSON.parse(buffer.toString())
    //           .find(airport => airport.code === this.code)
    //         this.city = info.city
    //         cb(info)
    //     })
    // }

    getInfo() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'airport-data.json'), (err, buffer) => {
                if (err) return reject(err)
                const info = JSON.parse(buffer.toString())
                .find(airport => airport.code === this.code)
                this.city = info.city
                resolve(info)
            })           
        })
    }
}

module.exports = Airport