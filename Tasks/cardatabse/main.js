let form1 = document.querySelector('#form1');
let forms = document.querySelector('#form');
let searchPlate = document.querySelector('#searchvalue');
let table1 = document.querySelector('#database');
let displaysearch = document.querySelector('#displaysearch');
const carArrays = [];

class Cars {
       constructor(cLicence, cmaker, cmodel, cowner, ccarprice, ccarcolor) {
              this.cllicence = cLicence,
                     this.clmaker = cmaker,
                     this.clmodel = cmodel,
                     this.clowner = cowner,
                     this.clcarprice = ccarprice,
                     this.clcarcolor = ccarcolor
       }
}

let savecar = (e) => {
       let licence = document.querySelector('#licenceNumber').value;
       let maker = document.querySelector('#Carmaker').value;
       let model = document.querySelector('#carmodel').value;
       let owner = document.querySelector('#carowner').value;
       let carprice = document.querySelector('#carprice').value;
       let carcolor = document.querySelector('#carcolor').value;
       if (!licence) {
              alert('Value missing, Enter licence');
              document.querySelector('#licenceNumber').focus();
              return false;
       }
       else if (!maker) {
              alert('Value missing, , Enter maker');
              document.querySelector('#Carmaker').focus();
              return false;
       }
       else if (!model) {
              alert('Value missing, , Enter model');
              document.querySelector('#carmodel').focus();
              return false;
       }
       else if (!owner) {
              alert('Value missing,  Enter owner');
              document.querySelector('#carowner').focus();
              return false;
       }
       else if (!carprice) {
              alert('Value missing, Enter carprice');
              document.querySelector('#carprice').focus();
              return false;
       }
       else if (!carcolor) {
              alert('entity missing, Enter car color');
              document.querySelector('#carcolor').focus();
              return false;
       }
       else {
              const cars = new Cars;
              cars.cllicence = licence; cars.clmaker = maker; cars.clmodel = model; cars.clowner = owner; cars.clcarprice = carprice;
              cars.clcarcolor = carcolor;
              carArrays.push(cars);

              e.preventDefault();
              // console.log(licence, maker, model, owner);
              let rows = table1.insertRow();
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
              forms.reset();
       }

}
const valueReset = (e) => {
       e.preventDefault;//use bellow to empty the table
       // for(x=table1.rows.length-1;x>0;x--){
       //        table1.deleteRow(x);
       //}
}
let searchcar = (e) => {
       e.preventDefault;
       const searchObject = carArrays.findIndex(car => car.cllicence == searchPlate.value)
       if (searchObject != -1) {

              const { cllicence, clmaker, clowner, clcarprice, clmodel, carcolor } = carArrays[searchObject];
              displaysearch.style.background = "white";
              displaysearch.innerHTML = `Car with plate ${cllicence} is a ${clmaker} owned by ${clowner} 
              and its color is ${carcolor}, model is ${clmodel} and is priced at ${clcarprice}€`;
       }
       else {
              displaysearch.style.background = "red";
              displaysearch.innerHTML = "sorry no car was found in our database, please add it first";
       }
}

forms.addEventListener('submit', savecar);
forms.addEventListener('reset', valueReset);
form1.addEventListener('submit', searchcar);