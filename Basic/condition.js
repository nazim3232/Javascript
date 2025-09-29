let a = 60;
if(a>100)
{
    console.log("This is a number of the a .");
}
else
{
    console.log("This is the number of the b");
}

if(a>90)
{
    console.log("This is the number 1");
}
else if(a>80)
{
    console.log("This is the number 2.")
}
else if(a> 70){
    console.log("This is the number 3")
}
else if(a> 60)
{
    console.log("This is the number 4")
}
else if(a>50)
{
    console.log("This is the number 5")
}
else
{
    console.log("This is the number of the year .")
}

//This is the switch in the javascript.
let myName ="Nazim Chowdhury";
switch(myName){
    case "nazim":
        console.log("My name is Nazim");
        break;
        case "rakib":
        console.log("My name is Rakib")
        break;
        case "faisal":
        console.log("My name is Faisal")
        break;
     default:
    console.log("Enter a valid name.");
}

console.log("This is the nested condition in the javascript");

//this is also nesting  but in the long-cut.
let age = 20;
let flag = true;
let gender = "male";
if(age > 18)
{
    if(gender=="male")
    {
        console.log("Male");
    }
    else{
        console.log("female");
    }
}
else
{
    console.log("You are not able to participate in the team.")
}
//this is called the nesting of the condition in the javascript in short-cut 

if(gender=="male" && age >18 && flag==true)
{
    console.log("This is  a number.");
}
else{
    console.log("You are outdeted.");
}