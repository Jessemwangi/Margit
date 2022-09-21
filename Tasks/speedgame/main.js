const gamesdivs=document.querySelectorAll('.gamespeed')
const startButton=document.querySelector('.btn1');
const endButton = document.querySelector('.btn2');
const displayscore = document.querySelector('#scoredisplay');
let scores=0;
let randomgen;
let gamemode = 0;
let gametimeout;
let pace=4000;
let counter=0;
let olddiv=0

const startgame = () =>{

    if (counter >=12)
    {
       return EndGame ();
    }
    randomgen=olddiv;
    let conadvice = olddiv;
   randomgen = randomNo(randomgen);
   olddiv = randomgen;
   gamesdivs[randomgen].classList.toggle('active');
   gamesdivs[conadvice].classList.remove('active');

    console.log('old',conadvice ,' newnumbe', randomgen);
    gametimeout = setTimeout(startgame, pace);
    pace= pace - 50;
    counter ++
    startButton.style.display='none';
    endButton.style.display='block'
}

const EndGame = () =>{
    clearTimeout(gametimeout);
    console.log(`Timeout your score is ${scores} has been cleared`);
    startButton.style.display='block';
    endButton.style.display='none'
    // location.reload();
}

const divclicked = (index) =>{
    console.log(index, randomgen);
    if (index == randomgen)
    {         
        scores =scores + 5; 
        counter--;
        displayscore.textContent=`Season saved ${scores}, `;
        console.log(scores , counter);
        
    }
    else{
        displayscore.textContent=`Checked, Season saved ${scores}, `;
        EndGame();
        return false;
    }
 }

 const randomNo = (currentvalue) =>{
    let randomno = Math.floor(Math.random() * 4);
    if (randomno != currentvalue)
    {
       
     return randomno;
    }
    else{
    return randomNo(currentvalue);
    }
 }

startButton.addEventListener('click',startgame);
endButton.addEventListener('click',EndGame);

gamesdivs.forEach((e , index)=>{
    e.addEventListener('click', () => divclicked(index ));
});

