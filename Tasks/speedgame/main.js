const gamesdivs=document.querySelectorAll('.gamespeed')
const startButton=document.querySelector('.btn1');
const endButton = document.querySelector('.btn2');
const displayscore = document.querySelector('#scoredisplay');
let scores=0;
let randomgen = 2;

const startgame = () =>{

}

const EndGame = () =>{

}

const divclicked = (index) =>{
    console.log(index, randomgen);
    if (index == randomgen)
    {         
        scores =scores + 5; 
        displayscore.textContent=`Season saved ${scores}, `;
        console.log(scores);
        
    }
    else{
        displayscore.textContent=`Checked, Season saved ${scores}, `;
    }
    randomgen = randomNo(index);
    console.log('next value is', randomgen); 
 }

startButton.addEventListener('click',startgame);
endButton.addEventListener('click',EndGame);
gamesdivs.forEach((e , index)=>{
    e.addEventListener('click', () => divclicked(index ));
   
});

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