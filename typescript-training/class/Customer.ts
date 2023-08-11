class Customer{

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
    constructor(private _firstName: string, private _lastName: string){

    }

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

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(firstName: string){
        this._firstName = firstName;
    }

    public get lastName(): string{
        return this._lastName;
    }



    public set lastName(lastName: string){
         this._lastName = lastName;
    }
}

// let myCustomer = new Customer("Crystal", "Chavez");
// // myCustomer.firstName = "Shiny";
// // myCustomer.lastName = "Chariot";

// console.log(myCustomer)

let newCustomer = new Customer("Taylor", "Swift")
newCustomer.firstName = "Tyler"
newCustomer.lastName = "Shift"
console.log(newCustomer.firstName, newCustomer.lastName)

// run this tsc --target ES5 --noEmitOnError Customer.ts
