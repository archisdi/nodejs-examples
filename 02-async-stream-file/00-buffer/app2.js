'use strict';
const buf1 = new ArrayBuffer(8);
const view = new Int32Array(buf1);

view[0] = 5;
view[1] = 15;

  console.log(view);
