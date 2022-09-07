let forms=document.querySelector('#form');
let savecar=(e)=>{
let table1=document.querySelector('#database');
 let licence=document.querySelector('#licenceNumber').value;
 let maker=document.querySelector('#Carmaker').value;
 let model=document.querySelector('#carmodel').value;
 let owner=document.querySelector('#carowner').value;
 let carprice=document.querySelector('#carprice').value;
 let carcolor=document.querySelector('#carcolor').value;

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
forms.addEventListener('submit',savecar)