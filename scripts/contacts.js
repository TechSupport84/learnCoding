import emailjs from "@emailjs/browser";
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("Py1B659gjhJ-UTk9J"); 

    let form = document.querySelector("form[name='submit']");
    let submitButton = form.querySelector("button");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let email = form.email.value.trim();

        if (email) {
           
            emailjs.send("LearnCoding", "LearnCoding", {
                email: email
            }).then(() => {
                showSuccessMessage();
            }).catch(error => {
                console.error("EmailJS Error:", error);
                alert("Failed to send email. Try again!");
            });

        } else {
            alert("Please enter a valid email!");
        }
    });

    function showSuccessMessage() {
        let successMessage = document.createElement("span");
        successMessage.textContent = " Subscription successful!";
        successMessage.style.color = "green";
        successMessage.style.fontWeight = "bold";

        submitButton.replaceWith(successMessage);
    }
});
