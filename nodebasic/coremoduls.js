const path = require('path');

const filename = path.join(__filename);
const basename = path.basename(filename);
const extname = path.extname(basename);

// to join two urls

console.log("The File Name Is :"+filename);
console.log("The Basename Is :"+basename);
console.log("The Extenstion Name Is :"+extname);