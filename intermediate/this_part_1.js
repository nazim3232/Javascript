//this is kwyword in the javascript 

//normally this refer to the global object I mean window
//console.log(this);

//inside the function this refer to the global window objet

function thisPointr()
{
    //console.log(this);
}

thisPointr();

//inside a method this refer to the instance of that objec)

let arr = ()=>{
    console.log(this)
}
arr();


let myObject ={
    name : "Nazim Chowdhurury",
    age: 23,
    salary: 3000000,
    showData: function()
    {
        console.log(`My name is ${this.name}.
            My age is ${this.age}.
            My salary is ${this.salary}`);
    }
}
myObject.showData();

//inside the method  current objet this refer to the current object;


class Cat{
    constructor(name, gender)
    {
        this.name = name;
        this.gender=  gender;
        
    }
    sound()
    {
        console.log("MEU MEU MEU.....")
    }
}
let myCat = new Cat("Puppy", "female");
myCat.sound();

function person(name, age , gender)
{
    this.name = name ;
    this.age = age;
    this.gennder = gender;
}

let P = new  person("Nazim Chowdhury", 23, "male");
console.log("Everything is ok.");
/*
element.addEventListener('click', function () {
  console.log(this); // refers to the element that received the event
});

 this is the major example of the this in the javascript .
 
element.addEventListener('click', () => {
  console.log(this); // refers to the enclosing lexical context (e.g., window or parent object)
});

*/