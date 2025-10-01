let person = {
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "Python", "HTML"],
  "address": {
    "city": "Dhaka",
    "zip": "1205",
    "people": ["male", "female", "transgender"]
  }
}

console.log(person.age);

console.log(person.skills[0]);
console.log("This is the javascript object notation.");
console.log(person.address.city);
console.log(person.address.people[2]);
//this is the second json formate data in the html 
let customers = {
  "orderId": "ORD20251001",
  "customer": "Jamal Uddin",
  "address": {
    "street": "45 Green Road",
    "city": "Chittagong",
    "postalCode": "4000"
  },
  "items": [
    { "name": "Laptop", "quantity": 1 },
    { "name": "Mouse", "quantity": 2 }
  ],
  "status": "Shipped",
  "delivered": "true"
}

console.log(customers.items[0].name);
console.log(customers.items[1].quantity);
console.log(customers.status);
console.log(customers.delivered);

console.log('This is the javascript object in the js.');
let passengers = {
  "bookingId": "B9876",
  "guestName": "Fatema Begum",
  "checkIn": "2025-10-15",
  "checkOut": "2025-10-20",
  "room": {
    "type": "Deluxe",
    "number": 305,
    "amenities": ["WiFi", "AC", "TV"]
  },
  "paid": false
};
console.log("This is the customer data: ");
console.log(passengers.room.amenities[2]);
console.log(passengers.paid);

let myJsonData = {
    "name":"Nazim Chowddhury",
    "section": 7,
    "department": "CSE",
    "subject": ["math", "Ai", "English","Discrite Math"],
    "faculty":[
        {"name": "Mohit Talukder"},
        {"name": "Rajbir Ahmed"},
        {"name":"Tania Sultana",
            "hobbby":[1,2,3,4,5,6],
        }
    ]
}

console.log(myJsonData.faculty[2].hobbby[5]);
console.log("This is my JSON formate data is created by me:");
console.log(myJsonData.faculty[2].name);
myJsonData.faculty.forEach((a)=>{
    console.log(a.name);
})

console.log("This is all about the json data in the javascript in the oops");
