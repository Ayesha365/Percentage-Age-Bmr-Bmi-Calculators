function showContent(id) {
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById(id).style.display = 'block';
  }

  document.querySelectorAll(".bmibutton").forEach(button => {
    button.addEventListener("click", function () {
      let parentDiv = this.parentElement;
      let bmi = 0;

      if (parentDiv.id === "first") {
        // US Units
        let feet = document.getElementById("usFeet").value;
        let inches = document.getElementById("usInches").value;
        let weight = document.getElementById("usWeight").value;

        if (!feet || !inches || !weight) {
          alert("Please enter all values.");
          return;
        }

        let heightInInches = (parseInt(feet) * 12) + parseInt(inches);
        bmi = (703 * weight) / (heightInInches * heightInInches);

      } else if (parentDiv.id === "second") {
        // Metric Units
        let height = document.getElementById("metricHeight").value;
        let weight = document.getElementById("metricWeight").value;

        if (!height || !weight) {
          alert("Please enter all values.");
          return;
        }

        let heightInMeters = height / 100;
        bmi = weight / (heightInMeters * heightInMeters);
      }

      bmi = bmi.toFixed(2);
      alert("Your BMI is: " + bmi);
    });
  });