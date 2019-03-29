$(document).ready(function() {
    // js variables
var counter = 0;
var targetNumber = Math.round(Math.random() * (120 - 19)) + 19;
var numberOptions = [10, 5, 3, 7];

 // wins and losses
 var wins = 0;
 var losses = 0;
 $("#score-wins").text(wins);
 $("#score-losses").text(losses);

    //clicking the crystal
$(".crystal-image").on("click", function() {
    counter = counter += 10;
    alert("Your new score is " + counter);
});
    //setting the random target number
$("#number-to-guess").text(targetNumber);

    //for loop to create crystals
for (var i=0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}
    //applying click event to all crystals
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#your-score").text(counter);
  
    //number matching logic
if (counter == targetNumber) {
    var wins = document.getElementById("score-wins");
    wins + 1;
    alert("You're a Winner!");
}
else if (counter >= targetNumber) {
    var losses = document.getElementById("score-losses");
    losses + 1;
    alert("You're a Loser!");
}
})


});
