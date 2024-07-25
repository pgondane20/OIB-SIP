function SendMail() {
    event.preventDefault();
    let parms = {
        email: document.getElementById("email").value,
    };

    emailjs.send("service_ewv6ou3", "template_xhfmose", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send email. Please try again.");
        });
}