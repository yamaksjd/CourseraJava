let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accesLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome, Admin";
    } else  {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "Please log in to access the system"
}

console.log("User Message: ", userMessage)