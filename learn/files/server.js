console.log('hello world')
// console.log(global);


const os =require('os')
const path =require('path')
// const path=require('path');
const {add,sub,mul,div} =require('./math');

// console.log(add(7,8));
// console.log(mul(4,5));
// console.log(div(6,3));

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(__dirname)
// console.log(__filename)

console.log(path.parse(__filename))
