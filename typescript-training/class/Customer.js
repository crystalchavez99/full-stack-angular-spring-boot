var Customer = /** @class */ (function () {
    // constructor
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Crystal", "Chavez");
// myCustomer.firstName = "Shiny";
// myCustomer.lastName = "Chariot";
console.log(myCustomer);
