let found: boolean = true;
let grade: number = 88.7;
let firstName: string = "Crystal";
let lastName: string = "Chavez";
console.log(`Hi ${firstName} ${lastName}`);
console.log(`Your grade is ${grade}`);

found = false;
grade = 50;

console.log(`Oh no your grade is ${grade} and this is ${found}`);

//tsc -noEmitOnError (bypass errors)
