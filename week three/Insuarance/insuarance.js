let habbitvalue=0,habbittext='',healthvalue=0,healthtext="",habbitpct=0,insurancepct=100;
const habbit=document.querySelectorAll('input[name="habbit"]');
const health=document.querySelectorAll('input[name="health"]')
let age=document.querySelector('#age'),agevalue=0,agecost=0;
let names=document.querySelector('#name'),namevalue='';
let sendit=document.querySelector('input[type="button"');
sendit.addEventListener('onclick',function(){
    alert('your record have been saved and send, welcome next time ' + namevalue);
});
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
                habbitpct+=-0.05;}
                else{
                habbitpct+=0.05;}
            }   
        }
        habbitvalue=insurancepct+habbitpct;
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
healthvalue=(counter*0.05).toFixed(2);
console.log(healthvalue, healthvalue);
            }
    }
    displaystatistics(namevalue,agecost,healthvalue,healthtext,habbitvalue,habbittext);
    });
});
let calcAgeCost=(agevalue)=>{
 agevalue<=18?agecost=500:
 agevalue<=25?agecost=(500+0.1):
 agevalue<=35?agecost=(500+0.3):
 agevalue<=45?agecost=(500+0.6):
 agevalue<=55?agecost=(500+1):
 agevalue<=65?agecost=(500+1.5):
agecost=(500+2.1);
console.log(agecost);
}
function displaystatistics(namevalue,agecost,healthvalue,healthtext,habbitvalue,habbittext)
{

}


