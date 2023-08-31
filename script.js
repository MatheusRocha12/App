document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const statusDiv = document.getElementById("status");
    let isActive = false;

    toggleBtn.addEventListener("click", function() {
        isActive = !isActive;
        updateStatus();
        showConfirmation(isActive);
    });

    function updateStatus() {
        statusDiv.textContent = isActive ? "Status: Active" : "Status: Inactive";
        statusDiv.style.color = isActive ? "#4caf50" : "#f44336";
    }

    function showConfirmation(isActive) {
        const confirmationMsg = document.createElement("div");
        confirmationMsg.classList.add("confirmation");
        confirmationMsg.textContent = isActive ? "Prosthesis Activated!" : "Prosthesis Deactivated!";
        document.body.appendChild(confirmationMsg);

        setTimeout(function() {
            confirmationMsg.remove();
        }, 2000);
    }
});
/* ... (código anterior) ... */

document.addEventListener("DOMContentLoaded", function() {
    // ... (código anterior) ...

    const toggleSurgicalBtn = document.getElementById("toggleSurgicalBtn");
    const surgicalStatusDiv = document.getElementById("surgicalStatus");
    let isSurgicalActive = false;

    toggleSurgicalBtn.addEventListener("click", function() {
        isSurgicalActive = !isSurgicalActive;
        updateSurgicalStatus();
        showConfirmation(isSurgicalActive);
    });

    function updateSurgicalStatus() {
        surgicalStatusDiv.textContent = isSurgicalActive ? "Status: Active" : "Status: Inactive";
        surgicalStatusDiv.style.color = isSurgicalActive ? "#4caf50" : "#f44336";
    }

    const toggleLabBtn = document.getElementById("toggleLabBtn");
    const labStatusDiv = document.getElementById("labStatus");
    let isLabActive = false;

    toggleLabBtn.addEventListener("click", function() {
        isLabActive = !isLabActive;
        updateLabStatus();
        showConfirmation(isLabActive);
    });

    function updateLabStatus() {
        labStatusDiv.textContent = isLabActive ? "Status: Active" : "Status: Inactive";
        labStatusDiv.style.color = isLabActive ? "#4caf50" : "#f44336";
    }

    // ... (código anterior) ...
});
