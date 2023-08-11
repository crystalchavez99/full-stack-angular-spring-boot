var Customer = /** @class */ (function () {
    // properties
    // private firstName: string;
    // private lastName: string;
    // alternative syntax "accessors"
    // private _firstName: string;
    // private _lastName: string;
    // constructor
    // constructor(firstName: string, lastName: string){
    //     this._firstName = firstName;
    //     this._lastName = lastName;
    // }
    // theres a shortcut for parameters
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
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
newCustomer.lastName = "Shift";
console.log(newCustomer.firstName, newCustomer.lastName);
// run this tsc --target ES5 --noEmitOnError Customer.ts
