let toppingcost=0, totalcost=0,deliverycost=0;pcikupmethod="", toppingcount=0;
let topplist="", choicesizecost=0,choicesname="" , choiceprizecost=0;
const elementsArray = document.querySelectorAll('input[type="checkbox"]');
let hellomessage= document.querySelector('#hellomasg');
const radioelement=document.querySelectorAll('input[type="radio"]');
const getpiza=document.querySelector('input[type="button"]');
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
function pickuploc(){
    let ev = document.querySelector("#deliver");
    if(ev.value==5){ deliverycost=5}
    else{deliverycost=0}
pcikupmethod = ev.options[ev.selectedIndex].text;  
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
}
calculatecost(choicesname,choiceprizecost,topplist,toppingcount,deliverycost,pcikupmethod);}
let calculatecost= (choicesname,choiceprizecost,topplist,toppingcount,deliverycost,pcikupmethod)=>
{
    if (toppingcount>4) {
        toppingcost=((toppingcount-4)*0.5);}
    else{ toppingcost=0;}
    totalcost=(toppingcost)+choiceprizecost+deliverycost;
document.querySelector('#Ordersize').textContent=choicesname;
document.querySelector('#toppings').textContent=topplist;
document.querySelector('#Ptotalcost').textContent=totalcost +"€";
document.querySelector ('#pickup').textContent=pcikupmethod;
};
getpiza.addEventListener('click',function(e){
    // let e=document.querySelector('.getpizza');
    e.preventDefault;
    document.getElementById('pizzaform').reset();
    alert('order placed, your order number is 7 stay put');
console.log(e);
});
function getname(e)
{
    welcome=document.querySelector('#customername').value;
    hellomessage.textContent='Welcome '+ welcome +', Select you Pizza option bellow:';
console.log(welcome);
}