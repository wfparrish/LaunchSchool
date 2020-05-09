const rlsync = require('readline-sync');
let bill = rlsync.question("What is the bill? ");
let tipPercent = rlsync.question("What is the tip percentage? ");

function calcTipAndBill(billAmt, tipPerc) {
  let tipAmount = (tipPerc * .01) * Number(billAmt);
  let totalAmount = Number(billAmt) + tipAmount;
  console.log(`The tip is ${"$" + tipAmount.toFixed(2)}`);
  console.log(`The total is ${"$" + totalAmount.toFixed(2)}`);
}

calcTipAndBill(bill, tipPercent);

