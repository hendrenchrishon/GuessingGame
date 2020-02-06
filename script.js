let work = function () {
    //computer picks a number


    /* loops have 3 parts: control variable; control boolean Expression : control increment/decrement/update
    control variable - control s when the loop executes.
     */
    alert("Enter credit card info for a free trial of netflix ");
    let restart="Yes";

    while(restart==="Yes"){
        let computerNumber = Math.floor((Math.random()*10)+1);
        alert(computerNumber);
        let playersGuess =parseInt(prompt("guess between 1 and 10"),10 );
        while(playersGuess !== computerNumber) {
            if (playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too  high, guess another time "), 10);
            } else {
                playersGuess = parseInt(prompt("Too low. try again "), 10);
            }
        }
        alert("You got it.");
        restart=prompt("You wanna play again? input yes or no ");
    }



    //Alert to get players guess
    //compare guess to number
    // if higher alert too high and then keep guessing till players guess - repeat
    //if lower alert too low and then keep guessing till players guess - repeat
    // if correct then alert you win then restart
    // if yes repeat from beginning
    // if no end program/ set fire to computer
};

let next = function(){
    //sameprogram with a do while looooop
    let restart;
    do{
        let computerNumber = Math.floor((Math.random()*10)+1);
        let playersguess;
        do{

            playersGuess =parseInt(prompt("guess between 1 and 10"),10 );

            if (playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too  high, guess another time"), 10);
            } else {
                playersGuess = parseInt(prompt("To low. try again "), 10);
            }


        }while(playersGuess != computerNumber);
        restart=prompt("You wanna play again? input yes or no ");

    } while(restart==="Yes");


};