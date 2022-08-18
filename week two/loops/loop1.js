let positiveOddNo=()=>{
for (let numbers=0;numbers<=100;numbers ++)
{ 
    if (numbers % 2 >0){
        console.log(numbers);  
}
   

}};
let positiveEvenNo=()=>{
let result="";
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
let CalcSpeed=()=>{
    let Distance =0;

let speed=0;

do {

     Distance = parseInt(prompt("enter Distance"));

let Hours= parseInt(prompt("enter speed"));

    speed = Distance / Hours;

    console.log(speed);

  result +=  string(speed) + " , ";
  document.getElementById("agestatu").innerHTML=string(result);
} while (Distance > 0);
};
let twentyevenNo=()=>
{
let counter = 0;
let Total=0;

while (counter <= 3) {
  let value= parseInt(prompt("enter value"));
    if (value%2==0){
      Total+=1
    }
    console.log(Total);
    counter ++;
   
}
document.getElementById("agestatu").innerHTML=string(Total);
};
