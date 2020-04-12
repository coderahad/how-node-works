// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module-1')
// const calc2 = require('./test-module-2')

const {add, multiply, divide} = require('./test-module-2')
const calc1 = new C();
// console.log(calc1.add(5,2));
// console.log(calc1.multiply(5,2));
// console.log(calc1.divide(5,2));


// console.log(calc2.add(5,2));
// console.log(calc2.multiply(5,2));
// console.log(calc2.divide(5,2));
// //exports
// console.log(add(5,2));
// console.log(multiply(5,2));
// console.log(divide(5,2));

//Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();