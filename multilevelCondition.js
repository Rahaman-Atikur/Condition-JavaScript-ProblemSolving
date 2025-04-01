// Price and some discount 
const price = 2500;
if (price >= 5000) {
    const discountAmount = 5000 * (10 / 100);
    // price = price*(10/100);
    console.log(discountAmount);
}
else if (price >= 2500) {
    const shortDiscount = 5000 * (5 / 100);
    console.log(shortDiscount);
}
else {
    console.log("Pay Full please");
}