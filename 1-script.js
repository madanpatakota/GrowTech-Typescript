// Typescript = Javascript + Few features.
//Typescript is superset of the javascript.
/*
   1. TS --> JS
   2. JS --> in the Sources
*/
// Typescript is for strong type
var customerID = 1;
customerID = 2;
var customerName = "John";
customerName = "Junior";
var areYouFine = true;
//areYouFine           = 1;
var anyValue = 1;
anyValue = "John";
anyValue = true;
var unknownValue;
unknownValue = 1;
unknownValue = "John";
unknownValue = true;
//var testing : string = anyValue; // I did't get any compile time exception.
//var testing : string = unknownValue;
var customerIds = [1, 2, 3];
var customerNames = ["john", "Peter"];
customerNames.push("Robert");
//readonly.
var customerNames1 = ["john", "Peter"];
//customerNames1.push("Robert");
var customerDetails = [1, "john", "London", 10];
var customerDetails1 = [1, "john", "London", 10];
//customerDetails1.push("12345");
var customerDetails2 = [1, "john", "London", 10];
console.log(customerDetails2);
//De-structure
// var customerDetails3 : [number , string , string , number]  =
//                                                 [ 1 , "john" , "London" , 10];
var [customerID, customerName, customerLocation, customerAge] = [1, "john", "London", 10];
console.log(customerID);
console.log(customerName);
console.log(customerLocation);
console.log(customerAge);
//Objects
var customerDetails3 = {
    "name": "John",
    "price": 30.90,
    "isAdmin": true
};
console.log(customerDetails3.isAdmin); // true
customerDetails3.isAdmin = false;
console.log(customerDetails3.isAdmin); //false
// Enums
// Enum is a kind of special class which represents the group of the constant values.
// By default enum start to initilize the variable with the 0 and then it will increase the count
var customer;
(function (customer) {
    customer[customer["William"] = 0] = "William";
    customer[customer["Clerk"] = 1] = "Clerk";
    customer[customer["Andy"] = 2] = "Andy";
})(customer || (customer = {}));
console.log("Willam value is ", customer.William);
console.log("Clerk value is ", customer.Clerk);
console.log("Andy value is ", customer.Andy);
var customer1;
(function (customer1) {
    customer1[customer1["William"] = 101] = "William";
    customer1[customer1["Clerk"] = 201] = "Clerk";
    customer1[customer1["Andy"] = 301] = "Andy";
})(customer1 || (customer1 = {}));
console.log("Willam value is ", customer1.William);
console.log("Clerk value is ", customer1.Clerk);
console.log("Andy value is ", customer1.Andy);
var customer2;
(function (customer2) {
    customer2["William"] = "IND";
    customer2["Clerk"] = "AUS";
    customer2["Andy"] = "UK";
})(customer2 || (customer2 = {}));
console.log("Willam value is ", customer2.William);
console.log("Clerk value is ", customer2.Clerk);
console.log("Andy value is ", customer2.Andy);
var cusomerid = 301;
if (cusomerid == customer1.Andy) {
    console.log("Hey iam andy");
}
var roles = {
    admin: 1,
    SalesRep: 2,
    Viewer: 7,
    Manager: 4
};
var roleID = 7; // roleID from dtabase as 7; //Karthik
if (roleID == roles.Viewer) {
}
