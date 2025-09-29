setTimeout(function()
{
    console.log("This is a regular function.")
}, 1000);

// setInterval(()=>{
//     console.log("This is the interval. ");
// }, 1000);
//These all about the callback function in the javascript ;
function higher1(callback)
{
    console.log('this is the One .');
    callback();
}

function higher2( callback)
{
    console.log("This is  the 2.");
    callback();
}


function higher3(callback)
{
    console.log("This is the 3")
    callback();
}
function ending()
{
    console.log("This is the ending .");
}

 higher1(()=>{
     higher2(()=>
    {
        higher3(()=>{
            ending()
        })
    })
})

console.log();
console.log();
console.log();
let promise = new Promise((resolve, reject)=>{
    console.log("The promise is resolved.");
    reject();
})

promise.then(()=>
{
    console.log("This is the number 1 promise .")
})
.then(()=>{
    console.log("This is the promise number 2.")
})
.then(()=>{
    console.log("This is the promise number 3.")
})
.catch(()=>{
    console.log("Promise rejected.");
})

//now this is time for for the async and await 


async function name() {
    
          await console.log("This is theh number 1.");
          await console.log("This is theh number 2.");
          await console.log("This is the number 3.")
          await console.log("This is theh number 4.");
          await console.log("This is theh number 5.");
          await console.log("This is the number 6.")
}
name();


console.log("This is called the fetch API.");
fetch(' https://api.thecatapi.com/v1/images/search?limit=10')
  .then((response) => response.json())
  .then((data) => console.log(data));

  console.log('This is the api fetch in the javascript.');