$(document).ready(function() {
    // js variables
    var counter = 0,
        targetNumber = Math.round(Math.random() * (120 - 19)) + 19,
        numberOptions = [10, 5, 3, 7];

    // wins and losses
    var wins = 0,
        losses = 0;
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
    function createCrystals() {
        $("#crystals").empty();
        for (var i=0; i < 4; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", "assets/images/crystal.png");
            imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
            $("#crystals").append(imageCrystal);
        }
    }

    // function call to createCrystals
    createCrystals()

    //applying click event to all crystals
    $("#crystals").on("click",".crystal-image", function() {
        console.log("buttons-clicked");
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#your-score").text(counter);

        //number matching logic
        if (counter == targetNumber) {
            wins++;
            $("#score-wins").text(wins);
            reset("You're a Winner!");
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#score-losses").text(losses);
            reset("You're a Loser!");
        }
    })

    //reset
    function reset (str) {
        alert(str);
        targetNumber = Math.round(Math.random() * (120 - 19)) + 19;
        $("#number-to-guess").text(targetNumber);
        counter = 0;
        $("#your-score").text(counter);
        createCrystals();
    }

});
