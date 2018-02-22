/* I deviated slighly from the instructions to make the random number for the crystals between 1 and 12, since adding a single integer would not present much challenge in the solution. The crystals always populate with unique values, and every generation has a solution. */

$(document).ready(() => {

    let a;
    let b;
    let c;
    let d;
    let x;
    let aMod;
    let bMod;
    let cMod;
    let dMod;
    let score;
    let gameStatus = 0;
    let wins;
    let losses;

    $('button').on('click', () => {
        wins = 0;
        losses = 0;
        score = 0;
        gameStatus = 0;
        randNums();
        $('.targetNum span').html(x);
        $('.scoreVal').html(score);
        $('#wins').html(wins);
        $('#losses').html(losses);
    });

    $('.gem1').on('click', () => {
        gameStatus = 1;
        score += a;
        $('.scoreVal').html(score);
        statusCheck();
    });

    $('.gem2').on('click', () => {
        gameStatus = 1;
        score += b;
        $('.scoreVal').html(score);
        statusCheck();
    });

    $('.gem3').on('click', () => {
        gameStatus = 1;
        score += c;
        $('.scoreVal').html(score);
        statusCheck();
    });

    $('.gem4').on('click', () => {
        gameStatus = 1;
        score += d;
        $('.scoreVal').html(score);
        statusCheck();
    });

    function statusCheck() {
        if (score === x && gameStatus) {

            score = 0;
            gameStatus = 0;
            randNums();
            $('.targetNum span').html(x);
            $('.scoreVal').html(score);
            wins++;
            $('#wins').html(wins);
        }

        if (score > x) {

            score = 0;
            gameStatus = 0;
            randNums();
            $('.targetNum span').html(x);
            $('.scoreVal').html(score);
            losses++;
            $('#losses').html(losses);
        }
    }

    function randNums() {

        a = Math.floor(Math.random() * 11 + 2);
        b = Math.floor(Math.random() * 11 + 2);
        c = Math.floor(Math.random() * 11 + 2);
        d = Math.floor(Math.random() * 11 + 2);
        x = Math.floor(Math.random() * 102 + 19);
        numArray = [a, b, c, d];

        aMod = x % a;
        bMod = x % b;
        cMod = x % c;
        dMod = x % d;

        let test = checkIfArrayIsUnique(numArray);

        if (aMod && bMod && cMod && dMod || (test === true)) {
            randNums();
        }
    }
});

function checkIfArrayIsUnique(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray.length; j++) {
            if (i != j) {
                if (myArray[i] == myArray[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}