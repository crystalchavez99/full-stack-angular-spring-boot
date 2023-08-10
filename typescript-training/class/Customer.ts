class Customer{

    // properties
    private firstName: string;
    private lastName: string;

    // constructor
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter setter
}

let myCustomer = new Customer("Crystal", "Chavez");
// myCustomer.firstName = "Shiny";
// myCustomer.lastName = "Chariot";

console.log(myCustomer)
