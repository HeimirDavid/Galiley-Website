
function sendMail(contactForm) {
    emailjs.send("gmail", "galiley", {
        'from_name': contactForm.name.value,
        'from_email': contactForm.email.value,
        'project_request': contactForm.eventsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("Failed", error);
        }
    )
    return false;
}