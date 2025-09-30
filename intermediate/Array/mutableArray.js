let number = [1,2,3,4,5,6,7,8,9,10];
console.log(number.length);
number.push(90);

number.push(91);
console.log(number);
number.pop();
number.pop();
number.pop();
number.pop();
number.unshift(-1, -2);
console.log(number);



let fruits = ["apple", "mango", "banana"];
console.log(fruits);
number.push(...fruits);
console.log(number);

number.shift();

number.reverse();
console.log(number);
number.sort((a,b)=>{
    return a-b;
})
console.log(number);

number.splice(5, 0, "Nazim Chowdhury", "Shamia Nila");
console.log(number);

number.splice(8, 0, "Rima");
console.log(number);


//push, pop, shift, unshift, reverse, sort, splice

//These are all mutable metod in the javascript for the array.
//length is a property not method 
