let fst=prompt("enter first number");
let second =prompt("enter second number");
let third=prompt("enter third number");
var a,b,c;
{
    function added(a,b,c){
        
       let Total= (a+b+c);
       console.log(Total)
return total;
    }
    function Multi(a,b,c){
        let Totalm= (a*b*c);
 return total;
     }
function dotask(){   

if ((Math.sign(fst)>=1||Math.sign(second)>=1||Math.sign(third))>=1){
    var Summed= Number(fst)+ Number(second)+ Number(third);//added(Number(fst), number(second) , number(third));
    console.log(Summed);
}
if ((Math.sign(fst)>=1&&Math.sign(second)>=1&&Math.sign(third))>=1){
    var Multiplication= (fst* second * third);
    console.log(Multiplication);
}
if ((Math.sign(fst)<=-1&&Math.sign(second)<=-1&&Math.sign(third))<=-1){
    
    console.log("only negatives");
}
}
dotask();
}




// if (Math.sign(fst)=1)
// {
// let a =fst;
// }
// if (Math.sign(second)=1)
// {
// let b =second;
// }
// if (Math.sign(third)=1)
// {
// let c =third;
// }