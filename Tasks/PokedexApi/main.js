"use strict";

const displayArea = document.querySelector('.box');
const search = document.querySelector('#searchpokedex');
const btnSearch = document.querySelector('#btnSearch');
const btnLimit = document.querySelector('#btnLimit');
const displaylimit = document.querySelector('#displaylimit');
const genBtn = document.querySelectorAll('.genBtn');
let offset = 0;
let pokemoNames = [];
let types = [];
let pokedexStoredArray = [];
let filteredPokedex = []; // Class to construct array for holding data

class pokedexs {
  constructor(pname, image, ptype, pGene) {
    this.pname = pname, this.image = image, this.ptype = ptype;
    this.generation = pGene;
  }

} // function to get name and main end-point url then pass them to pokecards function, 
// async ensures that data is available before calling renderData()


const getPokedex = async (displayLimitValue = 0, offset, pokedexGen) => {
  if (displaylimit.value) {
    displayLimitValue = displaylimit.value;
  }

  const Pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=
  ${displayLimitValue}&offset=${offset}`);
  const data = await Pokedex.json();
  pokemoNames = data.results;
  pokemoNames.forEach(async pokemoName => {
    await pokeCards(pokemoName.url, pokemoName.name, pokedexGen);
    renderData(pokedexStoredArray);
  });
}; // fetch for other details of an individual pokedex pass from the function getPokedex()
// Fetch all the information about a specific pokedex using url passed from getpokedex() function


const pokeCards = async (url, name, pokedexGen) => {
  const Pokedexurl = await fetch(url);
  const data = await Pokedexurl.json();
  const {
    front_default
  } = data.sprites.other['official-artwork'];
  types = data.types.map(type => `<img class="outlined" src="assets/${type.type.name}.png" alt="${type.type.name}"></img>`).join('');
  let Pokedex = new pokedexs();
  Pokedex.pname = name;
  Pokedex.image = front_default;
  Pokedex.ptype = types;
  Pokedex.generation = pokedexGen;
  pokedexStoredArray.push(Pokedex);
  localStorage.setItem(pokedexGen, JSON.stringify(pokedexStoredArray));
}; // display to the div with display grid css property


const renderData = (Passedarray = pokedexStoredArray) => {
  const datas = Passedarray.map(pokedetails => {
    return `<div class="card">
        <div class="imgBx">
            <img src="${pokedetails.image}" alt="${pokedetails.pname}"/>
        </div>
        <div class="details">
            <p>
                ${pokedetails.pname} <br />
                <span> ${pokedetails.ptype} </span>
            </p>
        </div>
        </div>`;
  }).join('');
  displayArea.innerHTML = datas;
};

const filterPokedex = () => {
  let filtered = pokedexStoredArray.filter(pokedexName => pokedexName.pname.toUpperCase() == search.value.toUpperCase());
};

function searchedPokedex(myStr) {
  if (myStr === '') return 'cannot be empty';else return pokedexStoredArray.filter(entry => {
    return entry.pname.trim().toUpperCase().includes(myStr.trim().toUpperCase());
  });
} // getPokedex();


search.addEventListener('keyup', async e => {
  if (e.target.value.length > 0) {
    filteredPokedex = searchedPokedex(e.target.value);
  } else {
    filteredPokedex = pokedexStoredArray;
  }

  renderData(filteredPokedex);
});

const generation = async e => {
  pokedexStoredArray = [];

  switch (e) {
    case 'Gen1':
      if (localStorage.getItem(e) == null) {
        getPokedex(151, 0, e);
      } else {
        getFromLocal(e);
      }

      break;

    case 'Gen2':
      if (localStorage.getItem(e) == null) {
        getPokedex(100, 151, e);
      } else {
        getFromLocal(e);
      }

      break;

    case 'Gen3':
      if (localStorage.getItem(e) == null) {
        getPokedex(135, 251, e);
      } else {
        getFromLocal(e);
      }

      break;

    case 'Gen4':
      if (localStorage.getItem(e) == null) {
        getPokedex(107, 386, e);
      } else {
        getFromLocal(e);
      }

      break;

    case 'Gen5':
      if (localStorage.getItem(e) == null) {
        getPokedex(156, 493, e);
      } else {
        getFromLocal(e);
      }

      break;

    case 'Gen6':
      if (localStorage.getItem(e) == null) {
        getPokedex(156, 493, e);
      } else {
        getFromLocal(e);
      }

      getPokedex(72, 649, e);
      break;

    case 'Gen7':
      if (localStorage.getItem(e) == null) {
        getPokedex(88, 721, e);
      } else {
        getFromLocal(e);
      }

      break;

    case 'Gen8':
      if (localStorage.getItem(e) == null) {
        getPokedex(96, 809, e);
      } else {
        getFromLocal(e);
      }

      break;
  }
};

const getFromLocal = e => {
  pokedexStoredArray = JSON.parse(localStorage.getItem(e));
  renderData(pokedexStoredArray);
};

btnSearch.addEventListener('click', filterPokedex);
btnLimit.addEventListener('click', e => {
  // window.location.reload();
  pokedexStoredArray = [];
  getPokedex();
});
genBtn.forEach(elem => {
  elem.addEventListener('click', e => {
    generation(e.target.value);
  });
});