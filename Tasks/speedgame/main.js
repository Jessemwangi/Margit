const gamesdivs = document.querySelectorAll('.gamespeed')
const startButton = document.querySelector('.btn1');
const endButton = document.querySelector('.btn2');
const displayscore = document.querySelector('#scoredisplay');
const modaldisplay = document.querySelector('#modaldisplay');
const overlay = document.querySelector('#overlay')
const closemodalbtn = document.querySelector('#closemodalbtn');
const bodyload = document.querySelector('body');

let scores = 0;
let randomgen;
let gamemode = 0;
let gametimeout;
let pace = 2000;
let counter = 0;
let olddiv = 0
let scorearray = [];
let scoresobject = {};
let prevscore = 0

const mybgsoung = new Audio("assets/background.wav");
const goal = new Audio('assets/goal.wav');
const scoresound = new Audio('assets/rain.wav');
const gamestart = new Audio('assets/start.wav');
const loadmusic = new Audio('assets/opened.wav');


// Create aclass to store data locally
class Gamescore {
    constructor(Scored) {
        this.score = Scored;
    }
}

const getprevscores = () => {
    if (scorearray.length >= 1){
        scoresobject=scorearray[0];
        const {score}=scoresobject
         displayscore.textContent=`Previous scores ${score}, `;
    }
 else{
        displayscore.textContent=`Previous scores 0 `;
       
     }
}



const startgame = () => {
    mybgsoung.pause();
    gamestart.play();
    if (counter >= 12) {
        return EndGame();
    }
    randomgen = olddiv;
    let conadvice = olddiv;
    randomgen = randomNo(randomgen);
    olddiv = randomgen;
    gamesdivs[randomgen].classList.toggle('active');
    gamesdivs[conadvice].classList.remove('active');
    gametimeout = setTimeout(startgame, pace);
    pace = pace - 50; // set time increment value
    counter++
    startButton.style.display = 'none';
    endButton.style.display = 'block'

    // Enable clicking of the div, clicking was disabled in css at initial
    gamesdivs.forEach((item) => {
        item.classList.add('autopointer');
    })
}

const EndGame = () => {
    gamesdivs[randomgen].classList.remove('active');
    goal.play();
    gamestart.pause();
    clearTimeout(gametimeout);
    modaldisplay.textContent = `Hurray!!, you scored ${scores} has been cleared`;

    const Gamescores = new Gamescore; //initialize new class
    Gamescores.score = scores; // addd data to the class constructor
    scorearray.unshift(Gamescores); // add to the front of the array

    console.log(scorearray);
    scores = 0; // reset scores to 0
    pace = 2000;
    //   Disable the clicking of the divs circles till game start is clicked
    gamesdivs.forEach((item) => {
        item.classList.remove('autopointer');

    });

    startButton.style.display = 'block'; // display start button
    endButton.style.display = 'none' // hide start button
    overlay.style.display = 'block'; // display overlay

}


const divclicked = (index) => {
    mybgsoung.play();
    console.log(index, randomgen);
    if (index == randomgen) {
        scores = scores + 5;
        scoresound.play();
        counter--;
        displayscore.textContent = `Trees Planted ${scores}, `;
        console.log(scores, counter);

    }
    else {
        displayscore.textContent = `Checked, Season Watered ${scores}, `;
        EndGame();
        return false;
    }
}

// function to hide the modal. 
const closemodalbtnF = () => {
    overlay.style.display = 'none';
    console.log('modal close clicked');
    goal.pause();
    mybgsoung.pause();
    getprevscores();
}

// generate value and check if it the same as passed value, loop it till its not like the first value
const randomNo = (currentvalue) => {
    let randomno = Math.floor(Math.random() * 4);
    if (randomno != currentvalue) {
        return randomno;
    }
    else {
        return randomNo(currentvalue);
    }
}

//add event listeners to the html elements
startButton.addEventListener('click', startgame);
endButton.addEventListener('click', EndGame);
closemodalbtn.addEventListener('click', closemodalbtnF);

// add even to all circle div through a loop, then we pass the element and index position to a function
gamesdivs.forEach((e, index) => {
    e.addEventListener('click', () => divclicked(index));
});

bodyload.onload = ()=>{
    getprevscores();
      
};

