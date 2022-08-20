//1 task 0ne
let result="";
let positiveOddNo=()=>{
for (let numbers=0;numbers<=100;numbers ++)
{ 
    if (numbers % 2 >0){
        console.log(numbers);  
}
   

}};
//2 task tw0
let positiveEvenNo=()=>{

{
for (let numbers=0;numbers<=100;numbers ++)
{ 
    if (numbers % 2 ==0){
    result=result +=  " " +String(numbers)  + " " +String(100-numbers);
    document.getElementById("agestatu").innerHTML=string(result);
}}
console.log(result);
// document.getElementById("agestatu").innerHTML=string(result);
$('html,body').animate({
    scrollTop: $("agestatu").offset().top},
    'slow');
//console.log(100-numbers);
}};
//console.log(100-numbers);
//3 task three
let CalcSpeed=()=>{
    let Distance =0;

let speed=0;

do {

     Distance = parseInt(prompt("enter Distance"));

let Hours= parseInt(prompt("enter speed"));

    speed = Distance / Hours;

    console.log(speed);

  result +=  speed + " , ";
 // document.getElementById("agestatu").innerHTML=string(result);
} while (Distance > 0);
alert("0 entered, program will terminate")
};
//4 task 4
let twentyevenNo=()=>
{
let counter = 0;
let Total=0;

while (counter <20) {
  let value= parseInt(prompt("enter value"));
    if (value%2==0){
      Total+=1
    }
    console.log(Total);
    counter ++;
    //document.getElementById("agestatu").innerHTML=string(Total);
}
alert("20 numbers entered, thats the maxmum allowed");
};
//5 task 5
let averagetill0=()=>
{
  let nsums =0;
  let ncounter = 0;
  let numbers=0;
  
  do {
  
    numbers = parseInt(prompt("enter any number")); 
    ncounter+=1
    nsums+=numbers
      let result=nsums/ncounter
        console.log(result);
      //result +=  string(result) + " , ";
   // document.getElementById("agestatu").innerHTML=string(result);
  } while (numbers > 0);
  alert("0 entered, program will terminate")
};
//6 task six
let averagetill25=()=>{
let nsums =0;
  let ncounter = 0;
  let n = 0;
  while(n<25)
  {
    numbers = parseInt(prompt("enter any number")); 
    ncounter+=1;
    nsums+=numbers;
      let result=nsums/ncounter;
        console.log(result);
        n++;
  }
  alert("25 values entered, maximum reached");
};
//7 task seven
let averagewithyesno=()=>
{
  let numbers = 0;
let nsums =0;
  let ncounter = 0;
  let continueadd=0;
    do
    {
      numbers = parseInt(prompt("enter any number")); 
      continueadd = confirm("Do you want to add another number?");
        ncounter+=1;
    nsums+=numbers;
      let result=nsums/ncounter;
        console.log(result);
      } while (continueadd)
};
//8 task eight
let Smallestinlist=()=>
{
let numbers =  parseInt(prompt("how many number do you wish to enter")); 
const arr1=[];
for(n=0;n<numbers;n++)
{
let values= prompt("enter any number");
arr1[n]=values
console.log(arr1)
}
console.log(smallinarr(arr1));

function smallinarr(arr1)
{
var smallest = arr1.sort((a, b) => a - b);

return smallest[0];
}
};
//9 task number nine
let biggestinlist=()=>{
let numbers = 10; 
const arr1=[];
for(n=0;n<numbers;n++)
{
let values= prompt("enter any number");
arr1[n]=values
//console.log(arr1)
}
var nm1=biginarr(arr1)
console.log(nm1);
console.log(nm1[0],nm1[1]);
function biginarr(arr1)
{
var biggest = arr1.sort((a, b) => b - a);

return biggest;// + '${biggest[1]}';
}
};
