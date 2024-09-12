
// Typescript = Javascript + Few features.

//Typescript is superset of the javascript.
/*
   1. TS --> JS
   2. JS --> in the Sources
*/



// Typescript is for strong type

var customerID:number = 1;
    customerID        = 2;


var customerName:string = "John";
    customerName        = "Junior"

var areYouFine:boolean = true;
    //areYouFine           = 1;

var anyValue: any  = 1;
    anyValue       = "John";
    anyValue       = true;

var unknownValue:unknown;
    unknownValue =  1;
    unknownValue = "John";
    unknownValue = true;


//var testing : string = anyValue; // I did't get any compile time exception.
//var testing : string = unknownValue;



var customerIds   : number[] = [1,2,3];
var customerNames : string[] = ["john" , "Peter"];
customerNames.push("Robert");

//readonly.

var customerNames1 :readonly string[] = ["john" , "Peter"];
//customerNames1.push("Robert");


var customerDetails : [number , string , string , number]  = [ 1 , "john" , "London" , 10];



var customerDetails1 :readonly [number , string , string , number]  = [ 1 , "john" , "London" , 10];
//customerDetails1.push("12345");



var customerDetails2 : [id:number , name:string , location:string , age:number]  =
                                                [ 1 , "john" , "London" , 10];

console.log(customerDetails2);


//De-structure



// var customerDetails3 : [number , string , string , number]  =
//                                                 [ 1 , "john" , "London" , 10];

var [customerID , customerName , customerLocation , customerAge] = [ 1 , "john" , "London" , 10];
console.log(customerID);
console.log(customerName);
console.log(customerLocation);
console.log(customerAge);


//Objects

var customerDetails3 :  { "name" : string , "price": number , "isAdmin" : boolean}  = {
    "name" : "John",
    "price" : 30.90,
    "isAdmin" : true
}

console.log(customerDetails3.isAdmin) ; // true
customerDetails3.isAdmin = false;
console.log(customerDetails3.isAdmin); //false



// Enums
// Enum is a kind of special class which represents the group of the constant values.
// By default enum start to initilize the variable with the 0 and then it will increase the count

enum customer{
    William,
    Clerk,
    Andy
}

console.log ( "Willam value is " , customer.William);
console.log ( "Clerk value is " , customer.Clerk);
console.log ( "Andy value is " , customer.Andy);


enum customer1{
    William = 101,
    Clerk = 201,
    Andy = 301
}


console.log ( "Willam value is " , customer1.William);
console.log ( "Clerk value is " , customer1.Clerk);
console.log ( "Andy value is " , customer1.Andy);



enum customer2{
    William = "IND",
    Clerk = "AUS",
    Andy = "UK"
}
console.log ( "Willam value is " , customer2.William);
console.log ( "Clerk value is " , customer2.Clerk);
console.log ( "Andy value is " , customer2.Andy);


var cusomerid = 301;

if(cusomerid == customer1.Andy){
   console.log("Hey iam andy");
}


var roles = {
    admin :   1,
    SalesRep  : 2,
    Viewer : 7,
    Manager : 4
}

var roleID = 7; // roleID from dtabase as 7; //Karthik

if(roleID == roles.Viewer){

}




