// console.log("Hello Newbies");

// const square = {
//     area: (a) => (a*a),
//     perimeter: (a) => (4 * a)
    
// };


// here what we did is, fetch the file square.js using
// require() function.
// in node we use require instead of import to access the data.

const square = require('./square.js');
const calSquare = (a) => {
    console.log(square.area(a));
    console.log(square.perimeter(a));
}


console.log(__filename);  // this will show the filename.
console.log(__dirname);   // this will show the folder name.


calSquare(5);