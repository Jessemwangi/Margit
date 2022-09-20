const gamesdivs=document.querySelectorAll('.gamespeed')
const startButton=document.querySelector('.btn1');
const endButton = document.querySelector('.btn2')

const divclicked = (e) =>{
    
    console.log('div clicked');
}
const startgame = () =>{

}

const EndGame = () =>{
    
}

startButton.addEventListener('click',startgame);
endButton.addEventListener('click',EndGame);
gamesdivs.forEach(e =>{
    e.addEventListener('click', divclicked)
})
