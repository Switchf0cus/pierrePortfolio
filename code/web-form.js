function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// validation
function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var persona = document.contactForm.persona.value;

    
    var nameErr = emailErr = personaErr = true;
    
    // name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // email 
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    
    // persona
    if(persona == "Select") {
        printError("personaErr", "Please select your form");
    } else {
        printError("personaErr", "");
        personaErr = false;
    }
    
    
    if((nameErr || emailErr || personaErr ) == true) {
       return false;
    } else {
        
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Persona: " + persona + "\n" +
   
        alert("Thank you for getting in touch with me, I will get back to you as soon as possible")
    }
};
