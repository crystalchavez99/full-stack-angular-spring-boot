var found = true;
var grade = 88.7;
var firstName = "Crystal";
var lastName = "Chavez";
console.log("Hi ".concat(firstName, " ").concat(lastName));
console.log("Your grade is ".concat(grade));
found = false;
grade = 50;
console.log("Oh no your grade is ".concat(grade, " and this is ").concat(found));
//tsc -noEmitOnError (bypass errors)
