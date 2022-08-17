let hoursworked=parseInt(prompt("enter hours worked"));
const workinghouse=7;
let salary=9,bonus=0,Wbonus2=0;
var  caculatesalary=()=>{
if (hoursworked-workinghouse>0 && hoursworked-workinghouse<=2)
{
    // let whours=7+2;
    // salary=9 * whours
    bonus=(salary*2/2);
    console.log(bonus);
    Wbonus2=hoursworked-workinghouse;
}
else if (Wbonus2 >=1 )
{
    let Bhours=hoursworked-(2+workinghouse);
    //salary=9 * whours

    bonus=bonus + (salary*Bhours);
    console.log(bonus);
}
let earning=((salary*workinghouse) + bonus);
console.log(earning);
};
caculatesalary();