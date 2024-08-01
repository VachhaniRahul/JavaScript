// Number guessing game

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempt = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt("enter the number Between 1 to 100");
    guess = Number(guess);
    // console.log(guess);
    if (isNaN(guess)) {
        window.alert("Please enter valid number");
    }
    else if (guess > max || guess < min) {
        window.alert("Please enter valid number");
    }
    else {
        attempt++;

        if (guess > answer) {
            // max  = guess  ;
            window.alert("TO HIGH");
        }
        else if (guess < answer) {
            // min = guess  ;
            window.alert("TO LOW");
        }
        else {
            window.alert(`Congrats you have giveCorrect answer ${answer} in ${attempt} attempt`);
            running = false;
        }
    }
}