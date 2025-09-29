//this iis everything about the javascript javascript object in the js
let user ={
    firstName: "Nazim",
    lastName: " Chowdhury",
    age: 23,
    gender: "male",
    showDetails: function()
    {
  console.log(`My name is ${this.firstName}  ${this.lastName} and I an ${this.age} and my gernder is ${this.gender}.`)
    }

    }

    user.showDetails();
    let person = {};
     person.name ="Nazim Chowdhury";
    person.age = 90;
    person.hobby ="gardening";
    person.favouriteSub = ['Math', 'Bangla', 'English'];
    console.log(person);

    person.introduceYourself = function()
    {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.hobby}`);
    }

     person.introduceYourself();


     function  teacher(name ,age , subject)
     {
        this.name = name;
        this.age =age;
        this.subject = subject;
     }

     teacher.prototype.showEverything = function()
     {
 console.log(`My name is a ${this.name} and I am ${this.age} and my allocate  subject is ${this.subject} .`);
     }
     let mathTeacher = new teacher("Nazim Chowdhury", 23, "Math");
     mathTeacher.showEverything();

     class businessMan
     {
        constructor(name, age, hobby)
        {
            this.name = name ;
            this.age = age;
            this.hobby = hobby;
        }
        getDetails()
        {
            console.log(`${this.name} and ${this.age} and ${this.hobby}`);
        }
     }

     let Anbani = new businessMan("Mukhesh Ambani " , 23, "football");
     Anbani.getDetails();
   

     function factory(name, year, age, hobby)
     {
        return {
            name, year, age , hobby,
            getDetails()
            {
                console.log(`${this.name} and ${this.year} and ${this.age} and ${this.hobby}`);
            }

        };
     }

     let student = new factory("Nazim Chowddhury", 2002, 24, "reading book");
     student.getDetails();
     //These is all about the object creation in the javascript.
    
     const { name, year, age , hobby} = student;
     console.log(name);
     function getObject( person)
     {
        console.log("This is the object in the jvascript.");
        person.name = 90;
        console.log(person.name);
        console.log(person.year);
        console.log(person.age);
        console.log(person.hobby);

     } 
   getObject(student);
   console.log(student.name);



   let arr ={
           name : "Abbul Kalam",
           age: 67,
           getinfo:()=>{
            console.log(`${arr.name} and ${arr.age}`);
           }
   }


   arr.getinfo();
