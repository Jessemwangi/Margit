let toppingcost=0, totalcost=0,deliverycost=0;pcikupmethod="", toppingcount=0;
let topplist="", choicesizecost=0,choicesname="" ,welcome="", choiceprizecost=0;
let hellomessage= document.querySelector('#name');
const elementsArray = document.querySelectorAll('input[type="checkbox"]');
const radioelement=document.querySelectorAll('input[type="radio"]');
elementsArray.forEach(function(elem) {
    elem.addEventListener("change", function() {
              checkboxes();
    });
});
radioelement.forEach(function(elem){
    elem.addEventListener('change',function(e)
    {
        choicesizecost=e.target.value;
        if (choicesizecost==2){ choicesname="For 2, the price is 7,50€";choiceprizecost=7.50; }
        else if(choicesizecost==4){ choicesname="For 4, the price is 10,50€";choiceprizecost=10.50; }
        else if(choicesizecost==6){ choicesname="For 6, the price is 12,50€";choiceprizecost=12.50; }
        else if(choicesizecost==8){ choicesname="For 8, the price is 15,50€";choiceprizecost=15.50; }
        console.log(choicesizecost,choicesname);
        calculatecost(choicesname,choiceprizecost,topplist,toppingcount,deliverycost,pcikupmethod);
    });
});
let delivery=(e)=>{
    e = document.getElementById("deliver");
    if(e.value==5){ deliverycost=5}
    else{deliverycost=0}
pcikupmethod = e.options[e.selectedIndex].text;  
console.log(deliverycost,pcikupmethod);
calculatecost(choicesname,choiceprizecost,topplist,toppingcount,deliverycost,pcikupmethod);
}
function checkboxes(){
    topplist="";
    var inputElems = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
        count++;    
        topplist+=inputElems[i].value +", ";  
        toppingcount=count; 
    }
    console.log('topping list :',toppingcount, topplist);
}
calculatecost(choicesname,choiceprizecost,topplist,toppingcount,deliverycost,pcikupmethod);}
let calculatecost= (choicesname,choiceprizecost,topplist,toppingcount,deliverycost,pcikupmethod)=>
{
    if (welcome=="" || welcome ==null)
        {
            hellomessage.textContent="please Enter your name first";
             document.getElementById('name').focus();
             return false;
        }
    if (toppingcount>4) {
        toppingcost=((toppingcount-4)*0.5);}
    else{ toppingcost=0;}
    totalcost=(toppingcost)+choiceprizecost+deliverycost;
let choices = document.querySelector('#output__pS');
choices.textContent=choicesname;
document.querySelector('#output__pT').value=topplist;
document.getElementById('output__pTT').innerHTML='Hi '+welcome +', pizza cost is :' + totalcost +'€';
document.getElementById ('output__pD').innerHTML=pcikupmethod;
};
function getname(e)
{
    welcome=document.querySelector('#output__pN').value;
    hellomessage.textContent='Welcome '+ welcome +', Select you Pizza option bellow:';
console.log(welcome);
}


// var tag = document.createElement("p"); // <p></p>
//   var text = document.createTextNode("TEST TEXT"); 
//   tag.appendChild(text);