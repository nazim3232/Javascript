var myName = "Nazim Chowdhury   for the global scope";
console.log(myName);

function outer()
{
    console.log(myName);
    var age = 24;
    console.log(age);

}
outer();
//console.log(age);
{
    let myCgpa = 3.26;
    console.log(myCgpa);
      var friendName = "Arafat Shovu";
}
console.log("Let is the block sccoped so this is an undefined error .");
//console.log(myCgpa);

//This line is valid because it is not block scoped
console.log("My friend name is "+ friendName);

// concept of the lyxical scope

console.log("The conept of the inner and outer function and lyxical scope :");
function outerMost()
{
    //let myName= "Nazim Chowdhury";
    function inner()
    {
        let myName = "Arafat Shobu";
        console.log(myName);
    }
    inner();
console.log(myName);
}
outerMost();


console.log("This is the  my function : ");
function  myOuterScope()
{
    function myInnerScope()
    {
        let favouriteSubject = "Bangla and English";
    }
    console.log(favouriteSubject);
}
myOuterScopeb();

/*there are three scope in the javascript :
   1: Block 
   2: Function
   3:  Global

b
//And there is very another vary mportant conncept related to the lyxical scope:
Lyxical Scope : This term defined that a function will be accable from a block or not that will be decided to according to it's position
of the decleration  not the calling.
own scope 
then  parent scope 
    then grandParent scope 
        then global scope.
*/

