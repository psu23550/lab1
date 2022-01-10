console.log("Enter Score");
let stdin3 = process.openStdin();
stdin3.addListener("data", function (str3) {
  let score = parseInt(str3);
  if (score < 50) {
    console.log("Your Grade : F");
  }
  if (score >= 50 && score <= 54) {
    console.log("Your Grade : D");
  }
  if (score >= 55 && score <= 59) {
    console.log("Your Grade : D+");
  }
  if (score >= 60 && score <= 64) {
    console.log("Your Grade : C");
  }
  if (score >= 65 && score <= 69) {
    console.log("Your Grade : C+");
  }
  if (score >= 70 && score <= 74) {
    console.log("Your Grade : B");
  }
  if (score >= 75 && score <= 79) {
    console.log("Your Grade : B+");
  }
  if (score >= 80) {
    console.log("Your Grade : A");
  }
  if (score == "") {
    console.log("Input Score");
  }
  stdin3.destroy();
});