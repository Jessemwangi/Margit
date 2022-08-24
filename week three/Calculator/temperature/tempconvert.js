const selectcel = document.querySelector('#Cel');
const selectkel=document.querySelector("#kelv");
const selectfar=document.querySelector("#far");
let cel=0, far=0,kel=0;
selectcel.addEventListener('change', inputCel);
selectkel.addEventListener('change',inputkel);
selectfar.addEventListener('change',inputfar);
selectcel.value='';selectfar.value='';selectkel.value='';
function inputCel(e)
{
    cel=e.target.value;
    console.log(cel);
    far=(cel * 9/5) + 32;
kel=parseFloat(cel)  + parseFloat(273.15);
console.log(far,kel);
selectfar.value=far;
selectkel.value=kel;
}
function inputkel(e)
{
kel=e.target.value;
cel=kel - 273.15;
far=(kel- 273.15) * 9/5 + 32;
selectcel.value=cel;
selectfar.value=far;
}
function inputfar(e)
{
   far= e.target.value;
   cel=(far - 32) * 5/9;
  kel= (far - 32) * 5/9 + 273.15
  selectcel.value=cel;
  selectkel.value=kel;
}