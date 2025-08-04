document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact_form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const fullName = document.querySelector('input[name="full_name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const mobile = document.querySelector('input[name="mobile"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // ✅ Your Google Form URL
        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeS1RfHC26mbm-v2CNW33LxbPmtpdM_GWqzgiWidHrf-UFvIQ/formResponse";

        // ✅ Google Form Entry IDs (Replace with your own)
        const formData = new FormData();
        formData.append("entry.460125207", fullName); // Full Name
        formData.append("entry.148588875", email); // Email
        formData.append("entry.113923861", mobile); // Mobile
        formData.append("entry.1462503276", message); // Message

        // Submit data using fetch
        fetch(googleFormURL, {
            method: "POST",
            body: formData,
            mode: "no-cors" // Allows cross-origin submission
        }).then(() => {
            alert("Thank you! Your inquiry has been submitted.");
            contactForm.reset(); // Reset form
        }).catch(error => console.error("Error:", error));
    });
});
