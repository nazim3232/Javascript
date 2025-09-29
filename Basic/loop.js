for( let i = 0; i<10; i++)
{
    console.log(i);
}
console.log("This is the value of the Z with the while loop");
let z = 0;
while(z<10)
{
    console.log(z);
    z++;
}
console.log("This is the do-while loop in the js.");

let k = 1;
do{
    console.log("This is the value of the K.");
    k++;
}
while(k<11)

    //write the foor loop like while loop;
    console.log("This is the practice of the loop inn the javascript.");
    let m = 0;
    for( ; m<11; )
    {
        console.log("This is the for loop like while loop.");
        m++;
    }


    let fruits = ['apple', 'mango', 'banana', 'orange','fine-apple','jackfruits'];
    //this is the practice of the for of loop which we use in the array , map and set for the iteration
    for( let value of fruits)
    {
        console.log(value);
    }

    let person=
    {
        name : "Nazim Chowdhury",
        age: 23,
        salary: 40000,
        gender: "male",
        showDetails: function()
        {
            console.log(`My name is ${this.name} and my age is ${this.age} and my salary is ${this.salary} and my gender is ${this.gender}.`);
        }
    }
    person.showDetails();

    for( let key in person)
    {
        //console.log(key);
        console.log(person[key]);
    }

    //This is bit more deficult to iterate through a object with the for of loop

    for( let [key , value ] of Object.entries(person))
    {
        console.log(`${key} = ${value}`);
    }


    // break and  continue in the js
    for( let i = 1; i<=10; i++)
    {
        if(i==4)
        {
            break;
        }
        console.log(i);
    }

     for( let i = 1; i<=10; i++)
    {
        if(i%2==0)
        {
            continue;
        }
        console.log(i);
    }