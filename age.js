document.querySelector(".good").addEventListener("click", function () {
    let dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        alert("Please select your date of birth.");
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let day = today.getDate() - dob.getDate();

    // adjust age if birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    // show result
    alert("Your age is: " + age + " years.");
});