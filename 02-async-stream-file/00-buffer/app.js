'use strict';
const buf1 = Buffer('Hello');

console.log(buf1.toString());
console.log(buf1.toJSON());

buf1.write('wololololo');

console.log(buf1.toString());
