new Date(); // Current date and time
new Date("2023-12-25T10:00:00"); // From a date string
new Date(2023, 11, 25, 10, 0, 0); // Year, month (0-indexed), day, hour, minute, second
new Date(1758284375196); // From milliseconds since epoch
let date = new Date();
date.toString();       // Full local date and time
date.toDateString();   // Date only
date.toTimeString();   // Time only
date.toUTCString();    // UTC format
date.toISOString();    // ISO 8601 formatb

date.setFullYear(2026);
date.setMonth(5); // June
date.setDate(15);
date.setHours(14);

let date1 = new Date("2025-09-30");
let date2 = new Date("2025-10-01");

console.log(date1 < date2); // true
console.log(date1.getTime() === date2.getTime()); // false


//all get method in the date 
date.getFullYear();      // Four-digit year (e.g., 2025)
date.getMonth();         // Month (0–11, January = 0)
date.getDate();          // Day of the month (1–31)
date.getDay();           // Day of the week (0–6, Sunday = 0)
date.getHours();         // Hour (0–23)
date.getMinutes();       // Minutes (0–59)
date.getSeconds();       // Seconds (0–59)
date.getMilliseconds();  // Milliseconds (0–999)
date.getUTCFullYear();
date.getUTCMonth();
date.getUTCDate();
date.getUTCDay();
date.getUTCHours();
date.getUTCMinutes();
date.getUTCSeconds();
date.getUTCMilliseconds();

date.getTime();          // Milliseconds since Jan 1, 1970 (Unix epoch)
date.getTimezoneOffset(); // Difference from UTC in minutes (e.g., -360 for UTC+6)