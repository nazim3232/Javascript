//These are all about the javascript operator 
console.log("Conditional operator in the javascript : ");
let a1 = 90;
let b1 = 56;
let assignValur =  true ? a1 : b1;
console.log(assignValur);
//this is the comma as operator in the javascript ;
console.log("This is the comma operator in the javascript: ");
let myNumber = (90, 91, 92, 92, 94);
console.log(myNumber);

//this is the uniery operator in the javascript 
let potiveNumber = "4";
console.log(+potiveNumber);
console.log(-potiveNumber);
let logicalNot = true;
console.log(!!logicalNot);
let bitwiseNot = 90;
console.log(~bitwiseNot);
//typeof return the type of variable 
//delete the property of an object
//
let number = 90;
console.log(void(number));
//void() always return the undefined in the js .
//pre and post increment and decrement operator in the javascript 
let   incAndDec = 43;
let  aa = ++incAndDec;
let bb = incAndDec++;
let cc = --incAndDec;
let dd = incAndDec--;
console.log( aa , bb, cc, dd);


//Assignment operator in js 
//=, +=, -=, *=, /=, %=, <<=, >>=, &=, *=, ^=, **=, >>>=

// = (Assignment)
let a = 10;
console.log("= :", a); // 10

// += (Addition Assignment)
a += 5; // a = a + 5
console.log("+= :", a); // 15

// -= (Subtraction Assignment)
a -= 3; // a = a - 3
console.log("-= :", a); // 12

// *= (Multiplication Assignment)
a *= 2; // a = a * 2
console.log("*= :", a); // 24

// /= (Division Assignment)
a /= 4; // a = a / 4
console.log("/= :", a); // 6

// %= (Modulus Assignment)
a %= 4; // a = a % 4
console.log("%= :", a); // 2

// <<= (Left Shift Assignment)
a <<= 2; // a = a << 2
console.log("<<= :", a); // 8

// >>= (Right Shift Assignment)
a >>= 1; // a = a >> 1
console.log(">>= :", a); // 4

// &= (Bitwise AND Assignment)
a &= 3; // a = a & 3
console.log("&= :", a); // 0

// *= again (Multiplication Assignment)
a = 5;
a *= 3;
console.log("*= again:", a); // 15

// ^= (Bitwise XOR Assignment)
a ^= 2; // a = a ^ 2
console.log("^= :", a); // 13

// **= (Exponentiation Assignment)
a **= 2; // a = a ** 2
console.log("**= :", a); // 169

// >>>= (Unsigned Right Shift Assignment)
a >>>= 2; // a = a >>> 2
console.log(">>>= :", a); // 42


//bitwise operator in the javascript 
// &, |, ~, << , >> , <<<
let x = 5;   // Binary: 0101
let y = 3;   // Binary: 0011

// & (Bitwise AND)
x = x & y;   // 0101 & 0011 = 0001
console.log("x after & y:", x); // 1

// Reset x for next operation
x = 5;

// | (Bitwise OR)
x = x | y;   // 0101 | 0011 = 0111
console.log("x after | y:", x); // 7

// Reset x for next operation
x = 5;

// ~ (Bitwise NOT)
x = ~x;      // ~0101 = 1010 (in two's complement: -6)
console.log("x after ~x:", x); // -6

// Reset x for next operation
x = 5;

// << (Left Shift)
x = x << 1;  // 0101 << 1 = 1010
console.log("x after << 1:", x); // 10

// Reset x for next operation
x = 5;

// >> (Right Shift)
x = x >> 1;  // 0101 >> 1 = 0010
console.log("x after >> 1:", x); // 2

// Reset x for next operation
x = -5;

// >>> (Unsigned Right Shift)
x = x >>> 1; // Treats x as unsigned
console.log("x after >>> 1:", x); // 2147483645 (depends on system)
// Declare BigInt values
let m1 = 12345678901234567890n;
let m2 = 9876543210n;

// + (Addition)
let result_add = m1 + m2;
console.log("Addition (m1 + m2):", result_add);

// - (Subtraction)
let result_sub = m1 - m2;
console.log("Subtraction (m1 - m2):", result_sub);

// * (Multiplication)
let result_mul = m1 * m2;
console.log("Multiplication (m1 * m2):", result_mul);

// / (Division — rounds down)
let result_div = m1 / m2;
console.log("Division (m1 / m2):", result_div);

// % (Modulus)
let result_mod = m1 % m2;
console.log("Modulus (m1 % m2):", result_mod);

// ** (Exponentiation)
let result_pow = m2 ** 2n;
console.log("Exponentiation (m2 ** 2):", result_pow);

// << (Left Shift)
let result_lshift = m2 << 2n;
console.log("Left Shift (m2 << 2):", result_lshift);

// >> (Right Shift)
let result_rshift = m2 >> 2n;
console.log("Right Shift (m2 >> 2):", result_rshift);

// & (Bitwise AND)
let result_and = m1 & m2;
console.log("Bitwise AND (m1 & m2):", result_and);

// | (Bitwise OR)
let result_or = m1 | m2;
console.log("Bitwise OR (m1 | m2):", result_or);

// ^ (Bitwise XOR)
let result_xor = m1 ^ m2;
console.log("Bitwise XOR (m1 ^ m2):", result_xor);

// ~ (Bitwise NOT)
let result_not = ~m1;
console.log("Bitwise NOT (~m1):", result_not);

//string operator 
let firstName = "Ayesha";
let lastName = "Rahman";

// + (Concatenation)
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Output: "Ayesha Rahman"

// += (Append to string)
let greeting = "Hello";
greeting += ", " + fullName + "!";
console.log("Greeting:", greeting); // Output: "Hello, Ayesha Rahman!"
//use template literal to substitute the  value of the string 
let fName = "Nazim ";
let lName = "Chowdhury";
console.log(`My name is ${fName} ${lName}`);