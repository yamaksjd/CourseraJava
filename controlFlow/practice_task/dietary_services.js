let roleInOrganization = "employee";
let accessLevel;

if (roleInOrganization === "employee") {
    accessLevel = "authorized access to Dietary Services";
} else if (roleInOrganization === "enrolled member") {
    accessLevel = "authorized to have access to Dietary services and one-on-one interation with dietician"
} else if(roleInOrganization === "subscriber") {
    accessLevel = "authorized partial access to facilitate Dietary Services only";
} else {
    accessLevel = "you need to enroll or at least suscribe to avail this facility.";
}

console.log("access Level: ", accessLevel)