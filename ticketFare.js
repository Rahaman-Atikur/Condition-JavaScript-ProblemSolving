
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 13;
let ticketFare = 45;
let students = 20;
if (age < 10) {
    console.log("Free");
}
else if (age >= 60) {
    ticketFare = ticketFare * (15 / 100);
    console.log(ticketFare);
}
else if (students == 20) {
    ticketFare = ticketFare * (50 / 100);
    console.log(ticketFare);
}
else {
    console.log("Regular Ticket fare is 800tk");
}
