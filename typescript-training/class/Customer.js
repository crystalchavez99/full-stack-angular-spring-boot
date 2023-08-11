var Customer = /** @class */ (function () {
    // constructor
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // since properties are private we use the getters
        // getter setter
        // public getFirstName(): string{
        //     return this.firstName;
        // }
        // public setFirstName(firstName: string){
        //     this.firstName = firstName;
        // }
        // public getLastName(): string{
        //     return this.lastName;
        // }
        // public setLastName(lastName: string){
        //     this.lastName = lastName;
        // }
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// let myCustomer = new Customer("Crystal", "Chavez");
// // myCustomer.firstName = "Shiny";
// // myCustomer.lastName = "Chariot";
// console.log(myCustomer)
var newCustomer = new Customer("Taylor", "Swift");
newCustomer.firstName = "Tyler";
console.log(newCustomer.firstName);
// run this tsc --target ES5 --noEmitOnError Customer.ts
