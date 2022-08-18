let hoursworked=parseInt(prompt("enter hours worked"));
const workinghours=7; //hours per day
let WkBonus=0;//100%
let salary=9,Wbonus2=0; //bounus 50%
{
var  caculatesalary=()=>{
if ((hoursworked-workinghours)<=2){
    Wbonus2=hoursworked-workinghours;
    WkBonus=0;
} else if(hoursworked-(workinghours+2)>0)
{
    //10-9=1 then take the rest to 100%     else     procced to 50 %
   WkBonus=(hoursworked-(workinghours+2)); //100%
   Wbonus2=hoursworked-WkBonus-workinghours; //get less than two *50%
}
let earning=(salary * hoursworked)+(Wbonus2*salary/2)+(WkBonus*salary);
console.log(WkBonus);
console.log(Wbonus2);
console.log(earning);
};
caculatesalary();
}