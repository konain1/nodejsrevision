const path  = require('path')

let filepath = path.join('app.js')

let base  = path.basename(filepath)
let ext = path.extname(base)

let absolutePath = path.resolve(__dirname,'revision','app.js')
console.log(absolutePath)