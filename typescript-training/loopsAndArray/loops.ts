// for(let i = 1; i<= 5; i++){
//     console.log(i);
// }

// declare array
let reviews: number[] = [5,5,4,3,1];

//computer avg
let total: number = 0;
// for(let i =0; i < reviews.length; i++){
//     console.log(reviews[i])
//     total += reviews[i];
// }

// let average: number = total / reviews.length;

// console.log(`Review average ${average}`)

// can use for of loop to simply it
for(let num of reviews){
    total += num
}

let average: number = total / reviews.length;

console.log(`Review average ${average}`)

let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
sports.push("Soccer")
for(let sport of sports){
    if(sport == "Cricket"){
        console.log("My favorite sport is "+ sport)
    }else{
        console.log(sport)
    }
}
