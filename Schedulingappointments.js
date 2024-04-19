document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("add_appointment.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Appointment added successfully!");
            // Optionally, you can redirect or reload the page
        } else {
            alert("Error adding appointment!");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
