let num = [1,2,3,4,5,6,7,8,9,10];
let number1 = num.toReversed();
console.log(number1);

let number2 = num.toSpliced(2,0, 1,2,3,4,5);
console.log(number2);
let number3 = num.toSorted((a,b)=>{
    return b-a;
})
console.log(number3);



let fruits = [...num, ...number1, ...number2, ...number3];
console.log(fruits)

