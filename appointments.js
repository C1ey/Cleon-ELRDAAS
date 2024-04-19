function handleSubmit(event) {
    event.preventDefault();

    try {
        // Get form values
        const appointmentDate = document.getElementById("appointmentDate").value;
        const appointmentTime = document.getElementById("appointmentTime").value;
        const loads = document.getElementById("loads").value;

        // Validate form values
        if (!appointmentDate || !appointmentTime || !loads) {
            throw new Error("Please fill out all fields.");
        }
        
        // Create appointment object
        const appointment = {
            date: appointmentDate,
            time: appointmentTime,
            loads: loads
        };

        // Save appointment to local storage
        saveAppointment(appointment);

        // Clear form
        document.getElementById("appointmentDate").value = "";
        document.getElementById("appointmentTime").value = "";
        document.getElementById("loads").value = "wash";
        document.getElementById("numberOfLoads").value = "1";
        document.getElementById("appointmentCost").textContent = "$500 JMD";
        
        alert("Appointment created successfully!");
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("appointmentForm");
    form.addEventListener("submit", handleSubmit);
});
