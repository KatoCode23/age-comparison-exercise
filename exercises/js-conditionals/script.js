console.log('I am here');


var me = {
  name: 'Kalen',
  age: 37
};

var myBestMan = {
  name: 'John',
  age: 40
};

var myGroomsmen = {
  name: 'George',
  age: 38
};

console.log(me, myBestMan, myGroomsmen);

function whoIsOlder(person1, person2) {
  if (person1.age > person2.age) {
    return person1.name + ' is older than ' + person2.name;
  }

  else if (person2.age > person1.age) {
    return person2.name + ' is older than ' + person1.name;
  } 
};

var ageComparison1 = whoIsOlder(myBestMan, myGroomsmen);
console.log(ageComparison1);
var ageComparison2 = whoIsOlder(me, myGroomsmen);
console.log(ageComparison2);
var ageComparison3 = whoIsOlder(me, myBestMan);
console.log(ageComparison3); 
var ageComparison4 = whoIsOlder(myGroomsmen, myBestMan);
console.log(ageComparison4);
var ageComparison5 = whoIsOlder(myGroomsmen, me);
console.log(ageComparison5);
var ageComparison6 = whoIsOlder(myBestMan, me);
console.log(ageComparison6); 
