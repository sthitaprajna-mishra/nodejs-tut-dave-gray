console.log("Hello World")

const os = require("os")
const path = require("path")
// const math = require("./math")
const { add, subtract, multiply, divide } = require("./math")

console.log(add(5, 8))
console.log(subtract(5, 8))
console.log(multiply(5, 8))
console.log(divide(5, 8))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))