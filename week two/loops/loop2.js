let result="";
// {
// for (let numbers=0;numbers<=100;numbers ++)
// { 
//     if (numbers % 2 ==0){
//     result=result +=  " " +String(numbers)  + " " +String(100-numbers);

  
// }
   

// }
// console.log(result);
// //console.log(100-numbers);
// }


//let result="";
let Distance =0;
let speed=0;
do {
     Distance = parseInt(prompt("enter Distance"));
let Hours= parseInt(prompt("enter speed"));
    speed = Distance / Hours;
    console.log(speed);
  //result +=  string(speed);
} while (Distance > 0);
// _____________________________________________________________________  or wanted to try another approach
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
// result += `${speed} `;
// console.log(result);

for (i=10; ;1>0 )
{

}

let numbers = 0;
let nsums =0;
  let ncounter = 0;
  let n = 0;
  let continueadd=0
    do
    {
     let numbers = parseInt(prompt("enter any number")); 
      continueadd = confirm("Do you want to add another number?");
        ncounter+=1;
    nsums+=numbers;
      let result=nsums/ncounter;
        console.log(result);
      } while (continueadd)
       
{
      let numbers =  parseInt(prompt("how many number do you wish to enter")); 
      const arr1=[];
for(n=0;n<numbers;n++)
{
  
//   const arr2 = [1, 2, 3];
// const arr3 = arr2.map(element => `_${element}_`);
  let values= prompt("enter any number");
  arr1[n]=values
  console.log(arr1)
}
var nm1=biginarr(arr1)
console.log(nm1[0],nm1[1]);
function biginarr(arr1)
{
  var biggest = arr1.sort((a, b) => b - a);

return biggest;// + '${biggest[1]}';
}
function smallinarr(arr1)
{
var smallest = arr1.sort((a, b) => a - b);

return smallest[0];
}


function smallestNumber(number){
  let min = number[0];
  for(let i = 0; i < number.length; i++){
      let element = number[i];
      if( element < min ){
          min = element
      }
  }
  return min;
}

}
