let myArray = [1,2,3,4,5,6,7,8,9,10];
let map = myArray.map((a)=>{
         return a*2;
})
console.log(map);

let filter  = myArray.filter((a)=>{
     if(a%2==0)
     {
        return a;
     }
})
console.log(filter);

let reduce = myArray.reduce((total, value)=>{
     return total+=value;
})

console.log(reduce);

let some = myArray.some((a)=>{
         if(a%2==1)
         {
            return a;
         }
})
console.log(some)
let every = myArray.every((a)=>{
    if(a<10)
    {
        return a;
    }
})

console.log(every);
let slice = myArray.slice(2);
console.log(slice);

//this is the basic operation on the array which are not muteable.

let find = myArray.find((a)=>{
    if(a%2==0)
    {
        return a;
    }
})
console.log(find);
let findIndex = myArray.findIndex((a)=>{
    if(a%2==0)
    {
        return a;
    }
})
console.log(findIndex);

let findLast = myArray.findLast((a)=>
{
    if(a%2!=0)
    {
        return a;
    }
})
console.log("This is the last value in the array : ");
console.log(findLast)
let include = myArray.includes(10);
console.log(include);
console.log("This is the find last index method.");
let lastIndex = myArray.findLastIndex((a)=>{
    if(a%2==1)
    {
        return a ;
    }
})
console.log(lastIndex);

let number = Array.of(1,2,3,4,5,6,7);
console.log(number);


let stringToArray = Array.from("My name is Nazim Chowdhury");
console.log(stringToArray);

let join = myArray.join('-');
console.log(join);

let myFlat = myArray.flat(Infinity);
console.log(myFlat);
console.log(myArray.at(7));
console.log(myArray.toString());
let afterConcat = myArray.concat(number, filter);
console.log(afterConcat);


let copy = [1,2,3,4,5,6,7,8];
let anotherCopy  = copy.copyWithin(0, 5,6);
console.log(anotherCopy);

