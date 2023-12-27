// Nodejs is an enviroment to run javascript outside of the browser

// Global
// __dirname - path to current directory
// __filename  - filename
// require  - function to use modules

// Modules - files
// Process - about new enviroment where the program is being executed

// why use modules ?
// Modules is used to spilit the code.

// console.log(module)  it shows the all properties of module  - module is as object which have some 
// properties  the most usefull is exports. It is used for sending the data outside from that file or function and variables


// console.log(module)

const greet = require('./func')
const pet = require('./obj')

greet("leo",pet.animal.age,pet.animal.breed)
console.log(pet.animal.breed)


