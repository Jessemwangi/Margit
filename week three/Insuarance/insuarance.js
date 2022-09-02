const habbit=document.querySelectorAll('input[name="habbit"]');
const health=document.querySelectorAll('input[name="health"]')
let habbitvalue=0,habbittext='',healthvalue='',habbitpct=0,insurancepct=100;
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
    });
   
});
health.forEach(function(chkhealth){
    chkhealth.addEventListener('change',function(){
        healthvalue='';let counter=0;
        for(i=0;i<health.length;i++)
        {
            if (health[i].type=='checkbox' && health[i].checked===true){
healthvalue+=health[1].value + ', ';
counter ++;
console.log(healthvalue, counter);
            }
    }
    });
});


