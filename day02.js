"use strict"
var fs = require('fs'),
path = require('path'),    
filePath = path.join(__dirname, 'day02_input.txt');

fs.readFile(filePath, 'utf8', function(err, data)
{
  const dataByLine = data.split("\n");
  let exactlyTwice = 0;
  let exactlyThrice = 0;

  dataByLine.forEach (id => {
    const dict = {};
    for (let i = 0; i < id.length; i++) {
      dict[id[i]] = dict[id[i]] == null ? 1 : dict[id[i]] + 1;
    }

    let thisTwice = false;
    let thisThrice = false;

    Object.keys(dict).forEach( key => {
      if (dict[key] === 3) {
        thisThrice = true;
      } else if (dict[key] === 2) {
        thisTwice = true
      }
    })

    exactlyTwice = thisTwice ? exactlyTwice + 1 : exactlyTwice;
    exactlyThrice = thisThrice ? exactlyThrice + 1 : exactlyThrice;
  })

  console.log("part 1 answer: ", exactlyTwice * exactlyThrice);


  // find 2 correct box IDs
  for (let id1 of dataByLine) {
    for (let id2 of dataByLine) {
      let lettersInCommon = 0;
      let differingIndex = -1;
      let theAnswer;
      for (let i = 0; i < id1.length; i++) {
        if (id1[i] === id2[i]) {
          lettersInCommon++;
        } else {
          differingIndex = i;
        }        
      }
      if (id1.length === id2.length && lettersInCommon == id1.length - 1) {
        theAnswer = id1.substr(0, differingIndex) + id1.substr(differingIndex + 1)
        console.log("part 2 answer: ", theAnswer)
        break;
      }
    }
  };
});

