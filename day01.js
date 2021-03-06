"use strict"
var fs = require('fs'),
path = require('path'),    
filePath = path.join(__dirname, 'day01_input.txt');

fs.readFile(filePath, 'utf8', function(err, data)
{
  const dataByLine = data.split("\n");

  let sum = dataByLine.reduce((acc, num) => acc + +num, 0);
  console.log("part 1 answer: ", sum);

  let freqSet = new Set();
  let hasDup = false;
  let i = 0;
  let ongoingSum = 0;

  while (!hasDup) {
    ongoingSum += +dataByLine[i];

    if (freqSet.has(ongoingSum)) {
      hasDup = true;
    } else {
      freqSet.add(ongoingSum)
    }

    i++;

    if (i === dataByLine.length) {
      i = 0;
    }

  }
  console.log("part 2 answer: ", ongoingSum)

});

