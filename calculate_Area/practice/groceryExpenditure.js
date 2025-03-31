let grocery_1;
let grocery_2;
let grocery_3;
let grocery_4;

function calculatePurchases() {
    grocery_1 = parseFloat(document.getElementById("grocery1").value);
    grocery_2 = parseFloat(document.getElementById("grocery2").value);
    grocery_3 = parseFloat(document.getElementById("grocery3").value);
    grocery_4 = parseFloat(document.getElementById("grocery4").value);
    let expenditure = grocery_1 + grocery_2 + grocery_3 + grocery_4;
    document.getElementById("result").innerText = `The totoal amount is : ${expenditure}$`;
}