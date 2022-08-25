let toppingcost=0, totalcost=0,deliverycost=0;toppingcount=0;
let topplist="";
function checkpep(){
if (document.querySelector("#Pepperoni:checked"))
{
console.log(document.querySelector("#Pepperoni").value);
topplist+=document.querySelector("#Pepperoni").value;
toppingcount++
}else{
console.log("not checked");
toppingcount--;
}
console.log(toppingcount);
checkboxes();
}
let calculatecost= (topc,delic,topcount)=>
{
totalcost=topc*topcount+delic;
};
function checkboxes(){
    var inputElems = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
        count++;
        
    }
}
console.log(count);toppingcount=count;console.log(toppingcount);
}
