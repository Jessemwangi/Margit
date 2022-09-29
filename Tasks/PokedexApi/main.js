"use strict";

const displayArea = document.querySelector('.box');
const search = document.querySelector('#searchpokedex');
const btnSearch = document.querySelector('#btnSearch');
let pokemoNames = [];
let types = [];
let returnarray = [];
let filteredPokedex = []; // Class to construct array for holding data

class pokedexs {
  constructor(pname, image, ptype) {
    this.pname = pname, this.image = image, this.ptype = ptype;
  }

} // function to get name and main end-point url then pass them to pokecards function, 
// async ensures that data is available before calling putToHtml()


const getPokedex = async () => {
  const Pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0');
  const data = await Pokedex.json();
  pokemoNames = data.results;
  pokemoNames.forEach(async pokemoName => {
    await pokeCards(pokemoName.url, pokemoName.name);
    putToHtml(returnarray);
  });
}; // fetch for other details of an individual pokedex pass from the function getPokedex


const pokeCards = async (url, name) => {
  const Pokedexurl = await fetch(url);
  const data = await Pokedexurl.json();
  const {
    front_default
  } = data.sprites.other.dream_world;
  types = data.types.map(type => type.type.name).join(", ");
  ; //  console.log(types);

  let Pokedex = new pokedexs();
  Pokedex.pname = name;
  Pokedex.image = front_default;
  Pokedex.ptype = types;
  returnarray.push(Pokedex);
}; // display to the div with display grid css property


const putToHtml = (Passedarray = returnarray) => {
  const datas = Passedarray.map(pokedetails => {
    return `<div class="card">
        <div class="imgBx">
            <img src="${pokedetails.image}" alt="images"/>
        </div>
        <div class="details">
            <p>
                ${pokedetails.pname} <br />
                <span> ${pokedetails.ptype} </span>
                <span class="material-symbols-outlined">local_fire_department</span>
                <span class="material-symbols-outlined"> detector_smoke </span>
            </p>
        </div>
        </div>`;
  }).join('');
  displayArea.innerHTML = datas;
};

const filterPokedex = () => {
  let filtered = returnarray.filter(pokedexName => pokedexName.pname.toUpperCase() == search.value.toUpperCase());
  console.log(filtered);
};

function searchedPokedex(myStr) {
  if (myStr === '') return 'cannot be empty';else return returnarray.filter(entry => {
    return entry.pname.trim().toUpperCase().includes(myStr.trim().toUpperCase());
  });
}

getPokedex();
search.addEventListener('keyup', async e => {
  if (e.target.value.length > 0) {
    filteredPokedex = await searchedPokedex(e.target.value);
  } else {
    filteredPokedex = returnarray;
  }

  putToHtml(filteredPokedex);
});
btnSearch.addEventListener('click', filterPokedex);