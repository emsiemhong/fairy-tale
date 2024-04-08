document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    var formData = new FormData(this);

    // Display a message
    var responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Thank you, " + formData.get("name") + "! We for give the message to us.";

    // Clear form fields
    this.reset();
});