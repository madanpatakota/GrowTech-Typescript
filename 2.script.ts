//type keyword

var cusname : string = "John";

type name = string;

var empName:name = "xyz";

//empName  = 1;

type age = number;

var empAge : age = 20; 


type Info = {  name : string , age : number};

// var personInfo : Info = {
//       name : "abc",
//       age : 30
// }

// var studentInfo : Info = {
//     name : "abc",
//     age : 30
// }


type info = {  name : string , age : number };


var personInfo : info   = {
      name : "abc",
      age : 30
};

var studentInfo: info = {
    name : "xyz",
    age : 80
};




/* class interface function(Core) */

//Role


//interface  noting but contract and it will supply the members to the class


//class : class is nothig but group of relative members


// Real time Project


class Person{  
}


// question : who will guide us which members i have to create in the class


/// Prepare the getHTMLlearnestudentsList

interface IBTechComputersStudentsService{
    getJavascriptLearnersStudentsCount();
    getHTMLLearnersStudntsCount();
}

interface IAgriculutestudentsService{
    getCropsListOfThisMonth()
}


class BtechComputerClass implements IBTechComputersStudentsService{
    getJavascriptLearnersStudentsCount(){
        //stementes;
    }
    getHTMLLearnersStudntsCount(){

    }

}

var refcomputuers = new BtechComputerClass();
refcomputuers.getHTMLLearnersStudntsCount();




class AgricultureClass implements IAgriculutestudentsService{
    getCropsListOfThisMonth(){

    }
}






// A class can take the multiple contracts(interface)


interface IZomotoService{
     zomotoDiscounts() : string;
}

interface ISwiggyService{
    swiggyDiscounts() : void;
}

// void --> if their is no return void
// return : you have to return any datatype


class premiumCustomers implements IZomotoService , ISwiggyService{

    zomotoDiscounts() {
        ///
        return "10%";
    }
    swiggyDiscounts() {
         /// own logic
    }


} 

var premium = new premiumCustomers();
premium.zomotoDiscounts();

// if(<condition>){

// }
// try{

// }
// catch(){

// }
// class <classname>

// {
      
// }
// interface <inerfacename>{

// }
// function <funcitonname>{
    
// }
// enum <enumname>{

// }

// type typname = string;

// switch(condition){
//     case _____
// }



