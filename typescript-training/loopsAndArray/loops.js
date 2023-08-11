// for(let i = 1; i<= 5; i++){
//     console.log(i);
// }
// declare array
var reviews = [5, 5, 4, 3, 1];
//computer avg
var total = 0;
// for(let i =0; i < reviews.length; i++){
//     console.log(reviews[i])
//     total += reviews[i];
// }
// let average: number = total / reviews.length;
// console.log(`Review average ${average}`)
// can use for of loop to simply it
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var num = reviews_1[_i];
    total += num;
}
var average = total / reviews.length;
console.log("Review average ".concat(average));
var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
sports.push("Soccer");
for (var _a = 0, sports_1 = sports; _a < sports_1.length; _a++) {
    var sport = sports_1[_a];
    if (sport == "Cricket") {
        console.log("My favorite sport is " + sport);
    }
    else {
        console.log(sport);
    }
}
