let habbitvalue=0,habbittext='',healthvalue=0,healthtext="",habbitpct=0,insurancepct=500;
const habbit=document.querySelectorAll('input[name="habbit"]');
const health=document.querySelectorAll('input[name="health"]');
const outputinfo=document.querySelector('#outputmessage');
let age=document.querySelector('#age'),agevalue=0,agecost=0;
let names=document.querySelector('#name'),namevalue='';
const advertarea= document.querySelector('#outputadvert');

names.addEventListener('change',function(e){
namevalue=e.target.value;
console.log(namevalue);
});
age.addEventListener('change',function(e){
agevalue=e.target.value;
console.log(agevalue);
calcAgeCost(agevalue);
});
habbit.forEach( function(chkhabbit){
    chkhabbit.addEventListener('change', function(){
        console.log(habbit);
        habbitvalue="";habbitpct=0;habbittext='';
        for (var i=0; i<habbit.length; i++) {
            
            if (habbit[i].type === "checkbox" && habbit[i].checked === true){ 
                habbittext+=habbit[i].value +", "; 
                if (habbit[i].value =='Daily exercise'){
                habbitpct+=-(insurancepct*5/100);}
                else{
                habbitpct+=(insurancepct*5/100);}
            }   
        }
        habbitvalue=habbitpct;
        console.log(habbitvalue);
        console.log(habbittext);
        displaystatistics(namevalue,agecost,healthvalue,healthtext,habbitvalue,habbittext);
    });
});
health.forEach(function(chkhealth){
    chkhealth.addEventListener('change',function(){
        healthvalue='';let counter=0;healthtext='';
        for(i=0;i<health.length;i++)
        {
            if (health[i].type=='checkbox' && health[i].checked===true){
                healthtext+=health[1].value + ', ';                
counter ++;
healthvalue=(counter*insurancepct*1/100).toFixed(2);
console.log(healthvalue, healthvalue);
            }
    }
    displaystatistics(namevalue,agecost,healthvalue,healthtext,habbitvalue,habbittext);
    });
});
let calcAgeCost=(agevalue)=>{
 agevalue<=18?agecost=insurancepct:
 agevalue<=25?agecost=(insurancepct*10/100):
 agevalue<=35?agecost=(insurancepct*30/100):
 agevalue<=45?agecost=(insurancepct*60/100):
 agevalue<=55?agecost=(insurancepct*100/100):
 agevalue<=65?agecost=(insurancepct*150/100):
agecost=(insurancepct*210/100).toFixed(2);
displaystatistics(namevalue,agecost,healthvalue,healthtext,habbitvalue,habbittext)
console.log(agecost);
}
function displaystatistics(namevalue,agecost,healthvalue,healthtext,habbitvalue,habbittext)
{
    advertarea.style.height="29vh";
    outputinfo.style.display='block';
    outputinfo.style.background="red";
    var totalcost=insurancepct+agecost+healthvalue+habbitvalue;
    let testing="Hello "+namevalue +", the following details will be used to create your insuarance Profile :- Your Age "
    + agevalue +" : this cost for this age category is " + agecost +", Habbits : "
    + habbittext + " which will cost you additional "+ habbitvalue+". The status of your relative Health as indicated by you :" 
    +  healthtext +" an addition of "+ healthvalue +"E, your total cost is: "
    +totalcost+ ", Thank you for taking your."
outputinfo.textContent=testing;
console.log(testing);
}
function sendit(){
    alert('your record have been saved and send, welcome next time ' + namevalue);
    outputinfo.style.display = '';
    advertarea.style.height="59vh";
    document.getElementById('form1').reset();
};


