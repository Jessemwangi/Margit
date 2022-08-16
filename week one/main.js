alert("Hi am learning javascript");
function CalcTax()
{ 
    var amount=document.getElementById("Amount_").value;
    var VAT=0.08;
    amount=amount*VAT;
    console.log(amount);
    document.getElementById("vattax").innerHTML=String(amount);
    amount = (amount/VAT)-amount;
    // amount in string
    document.getElementById("prdamount").innerHTML=String(amount);
    amount="$" + String( amount);
    console.log(amount);
document.getElementById("totalamount").innerHTML=document.getElementById("Amount_").value;
    // display in a div
}
// _______________________________________________________________
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;
var amount = 0;
function calculateTax(amount) {
return amount * TAX_RATE;
}
function formatAmount(amount) {
return "$" + amount.toFixed( 2 );
}
// keep buying phones while you still have money
while (amount < bank_balance) {
// buy a new phone!
amount = amount + PHONE_PRICE ;
amount =amount + calculateTax(amount);
// can we afford the accessory?
console.log(amount);
if (amount < SPENDING_THRESHOLD) {
amount = amount + ACCESSORY_PRICE //+ calculateTax(ACCESSORY_PRICE);
console.log(amount);
}
}
// don't forget to pay the government, too
//amount = amount + calculateTax( amount );
console.log(
"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76
// can you actually afford this purchase?
if (amount > bank_balance) {
console.log(
"You can't afford this purchase. :(" );
}