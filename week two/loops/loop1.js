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
}}
console.log(result);
document.getElementById("agestatu").innerHTML=string(result);
//console.log(100-numbers);
}};
//console.log(100-numbers);


