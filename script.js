// (1) X% of Y = ?
console.log("test");
document.querySelector(".button1")
.addEventListener("click", function () {
  let percent = parseFloat(document.querySelector(".custominput1").value);
  let total = parseFloat(document.querySelector(".custominput2").value);
  let resultBox = document.querySelector(".custominput3");

  if (!isNaN(percent) && !isNaN(total)) {
    let result = (percent / 100) * total;
    resultBox.value = result.toFixed(2);
  } else {
    alert("Please enter valid numbers!");
  }
});

document.querySelector(".button2").addEventListener("click", function () {
  document.querySelector(".custominput1").value = "";
  document.querySelector(".custominput2").value = "";
  document.querySelector(".custominput3").value = "";
});


// 2️⃣ What is X% of Y?
document.querySelector(".button3").addEventListener("click", function () {
  let percent = parseFloat(document.querySelector(".box1").value);
  let number = parseFloat(document.querySelector(".box2").value);

  if (!isNaN(percent) && !isNaN(number)) {
    let result = (percent / 100) * number;
    alert(`Result: ${result.toFixed(2)}`);
  } else {
    alert("Please enter valid numbers!");
  }
});



// 3️⃣ X is what % of Y?
document.querySelector(".button4").addEventListener("click", function () {
  let part = parseFloat(document.querySelector(".box3").value);
  let whole = parseFloat(document.querySelector(".box4").value);

  if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
    let percent = (part / whole) * 100;
    alert(`Result: ${percent.toFixed(2)}%`);
  } else {
    alert("Please enter valid numbers!");
  }
});


// 4️⃣ X is Y% of what?
document.querySelector(".button5").addEventListener("click", function () {
  let part = parseFloat(document.querySelector(".box5").value);
  let percent = parseFloat(document.querySelector(".box6").value);

  if (!isNaN(part) && !isNaN(percent) && percent !== 0) {
    let result = (part * 100) / percent;
    alert(`Result: ${result.toFixed(2)}`);
  } else {
    alert("Please enter valid numbers!");
  }
});
