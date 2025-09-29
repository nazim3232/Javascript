let person1 ={
    name: "Nazim Chowdhury",
    age : 23,
    department: "CSE",
    introduction: function()
    {
        console.log(`My name is ${this.name} and my age is ${this.age} and my department is ${this.department}`)
    }
}


person1.introduction()

let person2 = 
{
    name: "Faisal Ahmed",
    age : 24,
    department: "Anthopology"
}
person1.introduction.call(person2);

let person3 = 
{
    name: "Robin Hossain",
    age : 25,
    department: "Chemistry"
}

person1.introduction.apply(person3);

let person4 = 
{
    name: "Asif Hossian",
    age : 24,
    department: "Psychology"
}

let rechiveFunction = person1.introduction.bind(person4);
rechiveFunction();

/*
The concept of the function browing is the calling one method of one object with the another object to use on the 
behalfe of that object in in the javascript 
*/
//There are three system of calling one function : call, apply , bind;
