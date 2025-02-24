document.addEventListener("DOMContentLoaded", () => {
    fetchUserProfile();
});

function fetchUserProfile() {
    fetch("YOUR_SHOW_ENDPOINT", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_AUTH_TOKEN"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            document.getElementById("firstName").value = data.Firstname;
            document.getElementById("lastName").value = data.Lastname;
            document.getElementById("email").value = data.Email;
            document.getElementById("address").value = data.Address;
            document.getElementById("contact").value = data.ContactNumber;
            // If password is displayed (not recommended), set here.
        }
    })
    .catch(error => console.error("Error fetching user profile:", error));
}
