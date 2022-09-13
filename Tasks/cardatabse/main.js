let formssearch=document.querySelector('#form1');
let forms=document.querySelector('#form');
let table1=document.querySelector('#database');
 let licence=document.querySelector('#licenceNumber').value;
 let maker=document.querySelector('#Carmaker').value;
 let model=document.querySelector('#carmodel').value;
 let owner=document.querySelector('#carowner').value;
 let carprice=document.querySelector('#carprice').value;
 let carcolor=document.querySelector('#carcolor').value;
 
let savecar=(e)=>{
        let licence=document.querySelector('#licenceNumber').value;
        let maker=document.querySelector('#Carmaker').value;
        let model=document.querySelector('#carmodel').value;
        let owner=document.querySelector('#carowner').value;
        let carprice=document.querySelector('#carprice').value;
        let carcolor=document.querySelector('#carcolor').value;
        if (!licence)
 {
        alert('Value missing, Enter licence');
        document.querySelector('#licenceNumber').focus();
        return false;
        }
 else if (!maker)
 {
        alert('Value missing, , Enter maker');
        document.querySelector('#Carmaker').focus();
       return false;
 }
 else if(!model) {
        alert('Value missing, , Enter maker');
        document.querySelector('#carmodel').focus();
       return false;
 }
 else if (!owner){
        alert('Value missing,  Enter owner');
        document.querySelector('#carowner').focus();
       return false;
 }
 else if(!carprice){
        alert('Value missing, Enter carprice');
        document.querySelector('#carprice').focus();
       return false;
 }
 else if(!carcolor){
        alert('entity missing, Enter car color');
        document.querySelector('#carcolor').focus();
       return false;
 }
 else{


    e.preventDefault();
    console.log(licence,maker,model,owner);
let rows=table1.insertRow();
let cell1 = rows.insertCell();
let cell2 = rows.insertCell();
let cell3 = rows.insertCell();
let cell4 = rows.insertCell();
let cell5 = rows.insertCell();
let cell6 = rows.insertCell();
cell1.innerHTML = licence;
        cell2.innerHTML = maker;
        cell3.innerHTML = model;
        cell4.innerHTML = owner;
        cell5.innerHTML = carprice;
        cell6.innerHTML = carcolor;
 }
}
const valueReset=(e)=>{
e.preventDefault;
for(x=table1.rows.length-1;x>0;x--){
       table1.deleteRow(x);
}
}
forms.addEventListener('submit',savecar);
forms.addEventListener('reset',valueReset);