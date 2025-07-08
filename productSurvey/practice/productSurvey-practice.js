
submitBtn.addEventListener("click", submitFeedback);
    function submitFeedback() {
        const username = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const job = document.getElementById("job").value;
        const designation = document.getElementById("designation").value;
        const productType = document.getElementById("ProductType").value;
        const feedback = document.getElementById("feedbackText").value;
        const userExperience = document.getElementById("Experience").value
                
        if(!username || !age || !email || !job || !designation || !productType || !feedback || !userExperience) {
            alert("Fill all of the fields before submitting");
            return;
        }

        alert("Thank you for your valuable feedback");
        
        document.getElementById("userName").innerText = username;
        document.getElementById("userAge").innerText = age;
        document.getElementById("userEmail").innerText = email;
        document.getElementById("userJob").innerText = job;
        document.getElementById("userDesignation").innerText = designation;
        document.getElementById("userProductChoice").innerText = productType;
        document.getElementById("userFeedback").innerText = feedback;
        document.getElementById("userExperience").innerText = userExperience;

        const userInfo = document.getElementById("userInfo");
        if(userInfo) {
            userInfo.style.display = "block";
        } else {
            console.error("userInfo element not found!")
        }
        
        document.getElementById("userInfo").style.display = "block";
    }


 document.addEventListener("keydown", e => {
 if(e.key === "Enter") {
       submitFeedback();
   }
});