let toppingcost=0, totalcost=0,deliverycost=0;toppingcount=0;
let topplist="";
//add a function to all checkboxxes
const elementsArray = document.querySelectorAll('input[type="checkbox"]');
elementsArray.forEach(function(elem) {
    elem.addEventListener("change", function() {
              checkboxes();
    });
});
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
console.log(count);toppingcount=count;console.log(toppingcount);console.log(topplist); 
}
//calculate cost
let calculatecost= (topc,delic,topcount)=>
{
    if (toppingcount>3){totalcost=topc*topcount+delic;}
else{ }

};
