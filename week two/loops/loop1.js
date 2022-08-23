//1 task 0ne
let result="";
let positiveOddNo=()=>{
for (let numbers=0;numbers<=100;numbers ++)
{ 
    if (numbers % 2 >0){
        console.log(numbers);  
}
   }};

// ***********************************************************************************************************
//2 task tw0
let positiveEvenNo=()=>
{
  let final=98;
for (let numbers=0;numbers<=final;numbers +=2)
{ 
      result=result +=  " " +String(numbers)  + " " +String(final-numbers);
     document.getElementById("agestatu").innerHTML=result;
//   let final=98;
//   for (let numbers=0;numbers<=final;numbers +=2){
//   result +=' ' + final; + '';
// result +=' ' + end + '';
// end -=2;}
//     if (numbers % 2 ==0){
//     result=result +=  " " +String(numbers)  + " " +String(final-numbers);
//     document.getElementById("agestatu").innerHTML=result;
// }
}
console.log(result);
divscroll();
};

//*************************************************************************************************************************
//3 task three
let CalcSpeed=()=>{
  let Distance =0;
  let speed=0;
do {
    Distance = parseInt(prompt("enter Distance"));
    if (Distance ==0)
    {
      alert("0 entered, program will terminate");
      break; 
    }
    let Hours= parseInt(prompt("enter speed"));
    speed = division(Distance , Hours);
    console.log(speed);
    result += "0 , "+ speed ;
    document.getElementById("agestatu").innerHTML=result;
   
} while (Distance != 0);
divscroll();

};

// ********************************************************************************************************************************
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
    //document.getElementById("agestatu").innerHTML=Total;
}
//divscroll();
alert("20 numbers entered, thats the maxmum allowed");
};

// *****************************************************************************************************************************
//5 task 5
let averagetill0=()=>
{
  let nsums =0;
  let ncounter = 0;
  let numbers=0;  
  do {  
    numbers = parseInt(prompt("average calc: Enter any number")); 
    ncounter+=1
    nsums+=numbers
    let result1=division(nsums,ncounter);
    console.log(result1);
    result +=  " "+ result1 + " , ";
   document.getElementById("agestatu").innerHTML=result;
  } while (numbers != 0);
  divscroll();
  alert("0 entered, program will terminate")
  };
  averagetill0();
  // *******************************************************************************************************************************
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
    let result=division(nsums,ncounter);
    console.log(result);
    document.getElementById("agestatu").innerHTML=result;
    n++;
  }
  divscroll();
  alert("25 values entered, maximum reached");
};

// ****************************************************************************************************************************
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
      let result=division(nsums,ncounter);
      console.log(result);
      document.getElementById("agestatu").innerHTML=result;
      } while (continueadd)
      divscroll();
      alert("thank you for your time");
};

// **************************************************************************************************************************
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
document.getElementById("agestatu").innerHTML="in this array " +arr1 + " the smallest is :" + smallinarr(arr1);
divscroll();
};
// ************************************************************************************************************************
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

};
function division(s,t){
let devide=s/t;
return devide;
}

//10 task ten
let AllSummaryCalc=()=>{
let nsums =0;
  let ncounter = 0;
  let numbers=0;
  const arr1=[];
  for (n=0;n<10;n++) {
  
    numbers = parseInt(prompt("enter any number")); 
    ncounter+=1
    nsums+=numbers  //get sum
      let result=division(nsums,ncounter);///get average
        console.log('the sum is : ',nsums , '& average is ',result);
        arr1[n]=numbers;
    var smallvalue=smallinarr(arr1);
    var bigvalue=biginarr(arr1);
    console.log(arr1);
    console.log(bigvalue[0]);
    console.log('the biggest value is :',bigvalue[0],'and the smallest value is : ',smallinarr(arr1))
  } 
};
function biginarr(arr1)
{
var biggest = arr1.sort((a, b) => b - a);
return biggest;// + '${biggest[1]}';
}

function divscroll()
{ // document.getElementById("agestatu").scrollIntoView({behavior: "smooth", block: "center"});
  var divElement = document.getElementById("agestatu");
divElement.scrollIntoView({
	top: divElement.scrollHeight,//scroll to the bottom of the element
	behavior: 'smooth' //auto, smooth, initial, inherit
});
divElement.style.backgroundColor="#00FF00";
}
function smallinarr(arr1)
{
var smallest = arr1.sort((a, b) => a - b);
return smallest[0];
}
// function scrolltodiv()
// {
//   var $root = $('html, body');
//   $('a[href^="#agestatu"]').click(function () {
//       var href = $.attr(this, 'href');
//       $root.animate({
//           scrollTop: $(href).offset().top
//       }, 500, function () {
//           window.location.hash = href;
//       });

//       return false;
//   });
//}
