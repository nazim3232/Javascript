/*
There are three type function in the javascript 
1. Built-in function
2. Userdefine function 
3.Method inside the class or object.
 */

console.log("These are the user built-in function.");
let a = "90.87";
console.log(Number(a));

console.log(parseInt(a));


//Method
console.log(Math.floor(a));
console.log(Math.ceil(a));

let math=
{
    real :  90,
    img : 100,
    complexNumber: function ()
    {
        console.log(`${this.real} + ${this.img}i`);
    }

}

//This function is called the method because it is inside the class .
math.complexNumber();

//Now discuss with the real function 
console.log("Raw function in the javascript.");


//easy and raw function method in the javascript 
function sum( a , b)
{
    return a+ b;
}

console.log(sum(9,8));

console.log(sum("Nazim ", "Chowdhury"));

//function expression or annonymus function 
let myFunction = function()
{
    console.log("This is teh anonymous function.");
}
myFunction();

let sayMyname = function(a){
    console.log(`My name is ${a}.`);
}
sayMyname("Nazim Chowdhury");

//arrow function
let arrowFunction = ()=>
{
    console.log("This is the arrow function of this country.");
}
arrowFunction();

//this is the arrow function with parameter
let arrowFunctionWithParameter = (a, b, c, d)=>
{
    console.log(a,b,c,d,);
}
arrowFunctionWithParameter(1,2,3,4);

//HIGHER order function and callback function 

function higherOrder( a, b, callback)
{
    console.log(a, b);
    callback();
}

function myCallbackFunction(){
    console.log("This is the callback function.");
}
higherOrder(2,3, myCallbackFunction);


//This function is called the IIFE

(function dayOftheWeek()
{
    console.log("Monday");
})();

//IIFE with the arrow function 

(()=>{
    console.log(90);
}
)();
//factory function in the javascript

function factoryOder(name, department, section, roll, cgpa){
return {
    name,
    department,
    section,
    roll,
    cgpa,
    showStudentDetails() {
        console.log(`This is the detials of the student : 
                     The name of the student is ${this.name}. 
                     Department is ${this.department}.
                     Roll is ${this.roll}.
                     Section is ${this.section}.
                     Overall CGPA is ${this.cgpa}`);
    }
}

}

let studentNumber1 = factoryOder("Nazim Chowdhury", "CSSE", "7", 22235103583, 3.26);
studentNumber1.showStudentDetails();