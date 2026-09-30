/* Get button and result box */
var evaluateBtn = document.getElementById("evaluateBtn");
var resultBox = document.getElementById("resultBox");

/* Check the score */
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

/* Start the evaluation */
function startEvaluation(){
  /* Welcome */
  alert("Welcome to the Student Score Evaluator!");

  /* Get name */
  var name = prompt("Please enter your name:");

  /* Check name */
  if (name === null || name.trim() === ""){
    resultBox.textContent = "Invalid input: name is required.";
    return;
  }
  name = name.trim();

  /* Get score */
  var scoreInput = prompt("Hi " + name + "! Please enter your score:");

  /* Check score input */
  if (scoreInput === null || scoreInput.trim() === ""){
    resultBox.textContent = "Invalid input: score is required.";
    return;
  }

  var score = Number(scoreInput);

  /* Check if score is a number */
  if (isNaN(score)){
    resultBox.textContent = "Invalid score: please enter numbers only.";
    return;
  }

  /* Check if score is zero */
  if (score === 0){
    resultBox.textContent = "Invalid score: score cannot be zero.";
    return;
  }

  /* Check if score is negative */
  if (score < 0){
    resultBox.textContent = "Invalid score: score cannot be negative.";
    return;
  }

  /* Check if score is over 100 */
  if (score > 100){
    resultBox.textContent = "Invalid score: score cannot be more than 100.";
    return;
  }

  /* Ask to continue */
  var proceed = confirm("Do you want to continue and see your result?");

  if (proceed){
    /* Get and display result */
    var remark = evaluateScore(score);
    resultBox.textContent = name + ", your score is " + score + ": " + remark + "!";
  } else {
    resultBox.textContent = "Evaluation cancelled.";
  }
}

/* Run when clicked */
evaluateBtn.onclick = startEvaluation;
