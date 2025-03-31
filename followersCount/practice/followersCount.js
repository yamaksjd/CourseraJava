let count = 0;
function increaseCount() {
    count++;
    displayCount()
    checkCountValue()
}
function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if(count === 10) {
        alert("Your instagram account has gained 10 followers congrats")
    } else if (count === 20) {
        alert("your instagram account has gained 20 followers! keep going!")
    }
}

function resetCounter() {
    count = 0;
    displayCount()
    alert("The number of followers in your account has been reseted")
}