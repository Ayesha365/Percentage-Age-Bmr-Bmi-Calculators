 

document.querySelector("#calBmr").addEventListener("click", function () {
    // Get input values
    alert("button click")
    let age = parseFloat(document.querySelector(".agenumber").value);
    let gender = document.querySelector("#gender").value.toLowerCase();
    let height = parseFloat(document.querySelector(".height3").value);
    let heightUnit = document.querySelector(".height2").value.toLowerCase();
    let weight = parseFloat(document.querySelector(".weight3").value);
    let weightUnit = document.querySelector(".weight2").value.toLowerCase();

    // Validate input
    if (
      isNaN(age) || isNaN(height) || isNaN(weight) ||
      !gender || !heightUnit || !weightUnit
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    
    if (heightUnit === "in") {
      height = height * 2.54;
    }

    
    if (weightUnit === "lb") {
      weight = weight * 0.453592;
    }

    
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      alert("Invalid gender selected.");
      return;
    }

    alert("Your BMR is: " + bmr.toFixed(2) + " calories/day");
  });