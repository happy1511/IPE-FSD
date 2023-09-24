// Write a NodeJS script to take 2 elements 1 & 1000 using file system module & find
// Kaprekar numbers between them. A Kaprekar number is a number whose square when
// divided into two parts and such that sum of parts is equal to the original number and
// none of the parts has value 0.

const fs = require("fs");

function isKarpear(n) {
  square = (n * n).toString();
  var first = square.slice(0, parseInt(square.length / 2));
  var last = square.slice(parseInt(square.length / 2), square.length);

  if (Number(first) + Number(last) === n) {
    return true;
  } else {
    return false;
  }
}

function looping() {
  for (let i = 1; i <= 1000; i++) {
    if (isKarpear(i)) {
      fs.appendFile("karpekar.txt", "\n" + i.toString(), () => {
        console.log(`karpekar Number ${i}`);
      });
    }
  }
}

looping();
