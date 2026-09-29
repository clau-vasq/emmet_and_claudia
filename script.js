const sitePassword = "hibou";

const passwordGate = document.getElementById("password-gate");
const siteContent = document.getElementById("site-content");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");


// If access was already granted during this browser session,
// skip the password screen.
if (sessionStorage.getItem("eventAccess") === "granted") {
    showSite();
}


passwordForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredPassword =
        passwordInput.value.trim().toLowerCase();

    if (enteredPassword === sitePassword) {

        sessionStorage.setItem("eventAccess", "granted");

        showSite();

    } else {

        passwordError.textContent =
            "nope, try again! hint: 5 letters, starts with h, ends with ou";

        passwordError.hidden = false;

        passwordInput.value = "";
        passwordInput.focus();

    }

});


function showSite() {

    passwordGate.style.display = "none";
    siteContent.hidden = false;
    siteContent.style.display = "block";

}