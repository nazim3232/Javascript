let number = 90;      ///Number
let anotherNumber = 90.76;  //Number
let myName = "Nazim Chowdhury";  //String
let flag = true;   //boolean

let anotherFlag = false; // boolean
let name = undefined; //undefinned
let users = null; //null is an object.
let symbol = Symbol("Nazim Chowdhury");  // Symbol is an unique value.
console.log(symbol);

let id = Symbol('id');
let accountNumber = Symbol('accountNumber');  //symbol for the key creation.

let metaUser = {
    name : "Nazim Chowdhury",
    [id] : 123456,                          //This is an object for the you.
    [accountNumber] : 234235234534

 }

 console.log(metaUser); 
   for( let a in metaUser) 
   {                         //Iteration is not possible in the for in loop for the symbool.
    console.log(a);
   }

   let one1 = Symbol("This is the number one symbol.");
   let one2 = Symbol("This is the number one symbol.");    //two symbol is not never equally equal.
   console.log(one1=== one2);  //this is the false value for the symbol.b
   let big =  BigInt("344567568765423456789754654321");
   console.log(big);
   let anotherBigInt = 845980365872876582589625683464563456n;
   console.log(anotherBigInt);
   console.log(typeof anotherBigInt);



   /*

   These are the all fundamental premitive datatype in the javascript :
   1. bigint  540923758734589643976943756095686098457nb 
   2. Number;  3,5,6,8.09
   3. boolean true and false
   4. string   " My name is Nazim Chowdhury"
   6. symbol    Symbol("this is a symbol data type.")
   7. null     let a = null is an object
   8. undefined;   let b = undefined;
   var a ;
   console.log(a); undefined  
    */