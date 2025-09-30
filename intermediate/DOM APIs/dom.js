let  paragrap = document.getElementsByTagName('p');

Array.from(paragrap).forEach((p)=>{
    console.log(p);
})
document.getElementsByTagName('h1')[0].style.color= 'red';


let id = document.getElementById('para');
console.log(id);

let classElemet = document.getElementsByClassName('classId');
console.log(classElemet[0]);

console.log("This is the get element by class name in the js DOM api.");
Array.from(classElemet).forEach((a)=>{
    console.log(a);
})

console.log("This is the query selector and and queryselector all in the javascript.");
let query = document.querySelector('#query');
console.log(query);
console.log("This is the query selector all in the js DOM");

let querySelectorAll = document.querySelectorAll('.querySelector');
console.log(querySelectorAll);
console.log('Iterate through the queryselectorAll');
querySelectorAll.forEach((a)=>{
    console.log(a.nodeType);
})

//this is all about the html node  in the javascript and queryselector and quueryselecor all in the javascript 

let   newElement = document.createElement('p');
newElement.textContent = "I was created by the js.";
newElement.style.color = 'red';
newElement.style.border = '2px solid black'
newElement.style.textDecoration='line-through';
newElement.style.padding = '20px'
newElement.style.borderRadius = '10px';
newElement.style.backgroundColor='blue';
let container = document.querySelector('#container');
container.append(newElement);

//this is all about the creating and appending an element in the DOM with the help of the js.
document.getElementById('btn').addEventListener('click',()=>{
    let flag =  confirm("Do you want to continue.");
     console.log(flag);
     let promo = prompt("Enter your name");
     localStorage.setItem('name', promo);b 
});
document.getElementById('cls').addEventListener('click', function(){
            localStorage.clear();
            alert("The local stroage is cleaned.");
})
//This is my mother and this is not the anther mother and this is not the father of this country.
let containe2 = document.querySelector('#container2');
console.log(containe2);

let before = document.createElement('li');
before.textContent= 'This element was created by the javascript.';

containe2.before(before);

//this content was created by the javascript 
let after = document.createElement('li');
after.textContent ="This content was created for the insert after.";
containe2.after(after);


let myFruits = ["Apple", "Mango", "Banana", "fineapple", "orange"];

myFruits.forEach((a)=>{
       let li = document.createElement('li');
       li.textContent = a;
       containe2.appendChild(li);
})

let nameList = ["Alif", "Nazim", "Robin", "Faisal", "Ahmed"];
nameList.forEach((a)=>{
     let li=document.createElement('li');
        li.textContent= a;
        containe2.prepend(li);
})

let containerHead = document.querySelector('#container2 h3');
console.log(containerHead);

let inertBefore = document.createElement('p');
inertBefore.textContent="My name is Nazim Chowdhury";
containe2.insertBefore( inertBefore, containerHead);

//This is the another mother node in the html and this is the anther father and mother node.


//this is all about the class list in the javascript 


let classList = document.getElementById('classListPractice');
console.log(classList);
let dom = document.createElement('p');
dom.innerText="My name is Nazim Chowdhury";
dom.classList.add("color", "back-ground");
classList.append(dom);

//this is the   background color of the people of this country
//this is all about the classList property in the javascript.
let image = document.createElement('img');
image.setAttribute("src", "img/pexels-rachel-claire-5863561.jpg");
image.setAttribute("height", "100px");
image.setAttribute("width", "100px");
classList.append(image);

