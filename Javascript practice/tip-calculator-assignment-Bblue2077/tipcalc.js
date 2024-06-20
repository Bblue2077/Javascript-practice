let bill = 60; 

function calculateTip(amount) {
    return amount * 0.2; 
}

function getBillTotal(amount) {
    const tip = calculateTip(amount);
    const total = amount + tip;
    return total;
}

console.log("Tip amount:", calculateTip(bill));

const totalBill = getBillTotal(bill);
console.log("Total bill including tip:", totalBill);
// DO NOT EDIT BELOW THIS LINE
module.exports = { bill, calculateTip, getBillTotal };
