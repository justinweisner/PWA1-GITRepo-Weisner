/**
	Name: Justin Weisner
	Instructor: Jessica Garlic
	Date: 18 September 2015
	Assignment: The Duel Assignment
*/

// self-executing function
(function(){


    console.log("FIGHT!!!");

    //Players
    var players = [
        firstPlayer = { name:"Kabal", damage:20, health:100},  //This is the object for the first player at index 0
        secondPlayer = { name:"Kratos", damage:20, health:100}  //This is the object for the second player at index 1
    ];

    //Setting the rounds
    var round = 0;


    //Selecting the button image
    var button = document.querySelector(".buttonblue");


    //Replaces the 100 text with Name and Health of both players
    document.getElementById("kabal").innerHTML = players[0].name + ": " + players[0].health;
    document.getElementById("kratos").innerHTML = players[1].name + ": " + players[1].health;

    //The fight function starts below this comment
    function fight() {

        if (players[0].health < 1 && players[1].health < 1) {
            return false;
        }

        //Gives a minimum damage rating (10) to the maximum rating in the fighter variable (20)
        var minDamage1 = players[0].damage * .5;
        var minDamage2 = players[1].damage * .5;

        //Outputs a random number between 10 and 20 for Damage
        var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);

        //updates  health for the players with the new result
        players[0].health -= f1;
        players[1].health -= f2;

        // Calls the winnerCheck function
        var finalResult = winnerCheck();

        console.log(finalResult); // This prints the outcome thus far to the console


        if (finalResult === "no winner yet") {
            round++;
            document.getElementById("kabal").innerHTML = players[0].name + ": " + players[0].health;
            document.getElementById("kratos").innerHTML = players[1].name + ": " + players[1].health;
            document.getElementById("round_number").innerHTML = "Round " + round + ": COMPLETE!";
        } else {
            document.getElementById("kabal").innerHTML = "&nbsp;";
            document.getElementById("kratos").innerHTML = "&nbsp;";
            document.getElementById("round_number").innerHTML = finalResult;

            console.log(button);
            button.innerHTML = "Finished!!!";
            button.setAttribute('onclick', null);
        }
    } //This is where the fight function ends


    // This is where the winnerCheck function begins
    function winnerCheck(){
        console.log("in winnerCheck function");

        var result = "no winner yet";


        if (players[0].health < 1 && players[1].health < 1) {
            result="Draw";
        } else if (players[0].health < 1) {
            result = players[1].name + " Wins!!!";
        } else if (players[1].health < 1) {
            result = players[0].name + " Wins!!!";
        }

        return result;
    }
    // This is where the winnerCheck function ends


        /*******  The program gets started below *******/
        button.onclick = function(e) {
            fight();
            e.preventDefault();
            return false;
        }
})();