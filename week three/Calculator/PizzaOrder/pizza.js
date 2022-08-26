let toppingcost=0, totalcost=0,deliverycost=0;toppingcount=0;
let topplist="", choicesizecost=0,choicesname="" , choiceprizecost=0;
//add a function to all checkboxxes
const elementsArray = document.querySelectorAll('input[type="checkbox"]');
const radioelement=document.querySelectorAll('input[type="radio"]');
document.querySelector('#deliver').addEventListener('change',delivery);
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
        calculatecost(choicesname,choiceprizecost,topplist,toppingcount);
    });
});
let delivery=(e)=>{
    console.log(e.se);
}


function checkboxes(){
    topplist="";
    var inputElems = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
        
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
        count++;    
        topplist+=inputElems[i].value +", ";  
        //console.log(topplist);  
    }
}
//console.log(count);toppingcount=count;console.log(toppingcount);console.log(topplist); 
calculatecost(choicesname,choiceprizecost,topplist,toppingcount);}

//calculate cost
let calculatecost= (choicesname,choiceprizecost,topplist,toppingcount)=>
{
    if (toppingcount>4) {
        toppingcost=((toppingcount-4)*0.5);}
    else{ toppingcost=0;}
    totalcost=(toppingcost)+choiceprizecost;
document.querySelector('#Ordersize').textContent=choicesname;
document.querySelector('#toppings').textContent=topplist;
document.querySelector('#Ptotalcost').textContent=totalcost;
};
