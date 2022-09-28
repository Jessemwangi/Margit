const displayarea = document.querySelector('.box');
let pokemoNames = [];

const getPokedex = async () => {
    const Pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
    const data = await Pokedex.json();
    pokemoNames = (data.results);
    pokeCards()
}

function  pokeCards () {
    const cards = pokemoNames.map( async (pokename) => {

        const Pokedexurl =  await fetch(pokename.url);
        const data = await Pokedexurl.json();

        const {back_default} = data.sprites;

console.log(back_default, pokename.name);
        return `<div class="card">
            <div class="imgBx">
                <img src="${back_default}" alt="images"/>
            </div>
            <div class="details">
                <p>
                    ${pokename.name} <br />
                    <span class="material-symbols-outlined">Fireplace</span>
                    <span class="material-symbols-outlined">local_fire_department</span>
                    <span class="material-symbols-outlined"> detector_smoke </span>
                </p>
            </div>
            </div>`;}).join('');
            
            displayarea.innerHTML =  cards;
};


getPokedex()