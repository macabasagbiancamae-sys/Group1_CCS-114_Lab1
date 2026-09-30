/* Get the button and the result box */
var evaluateBtn = document.getElementById("evaluateBtn");
var resultBox = document.getElementById("resultBox");

/* Function to evaluate the score */
function evaluateScore(score){
  if (isNaN(score) || score <= 0 || score > 100){
    return "Invalid score";
  } else if (score >= 90){
    return "Excellent";
  } else if (score >= 75){
    return "Passed";
  } else {
    return "Failed";
  }
}

/* Main function, runs when the button is clicked */
function startEvaluation(){
  /* Welcome message */
  alert("Welcome to the Student Score Evaluator!");

  /* Ask for the name */
  var name = prompt("Please enter your name:");

  /* Validation: empty name (Cancel returns null) */
  if (name === null || name.trim() === ""){
    resultBox.textContent = "Invalid input: name is required.";
    return;
  }
  name = name.trim();

  /* Ask for the score */
  var scoreInput = prompt("Hi " + name + "! Please enter your score:");

  /* Validation: empty score */
  if (scoreInput === null || scoreInput.trim() === ""){
    resultBox.textContent = "Invalid input: score is required.";
    return;
  }

  var score = Number(scoreInput);

  /* Validation: non-numeric */
  if (isNaN(score)){
    resultBox.textContent = "Invalid score: please enter numbers only.";
    return;
  }

  /* Validation: zero */
  if (score === 0){
    resultBox.textContent = "Invalid score: score cannot be zero.";
    return;
  }

  /* Validation: negative */
  if (score < 0){
    resultBox.textContent = "Invalid score: score cannot be negative.";
    return;
  }

  /* Validation: beyond 100 */
  if (score > 100){
    resultBox.textContent = "Invalid score: score cannot be more than 100.";
    return;
  }

  /* Ask if the user wants to continue */
  var proceed = confirm("Do you want to continue and see your result?");

  if (proceed){
    /* Evaluate using the function then show the result */
    var remark = evaluateScore(score);
    resultBox.textContent = name + ", your score is " + score + ": " + remark + "!";
  } else {
    resultBox.textContent = "Evaluation cancelled.";
  }
}

/* Run when the button is clicked */
evaluateBtn.onclick = startEvaluation;
