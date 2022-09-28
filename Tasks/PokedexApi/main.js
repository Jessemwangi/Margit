const displayarea = document.querySelector('.box');
let pokemoNames = [];
let disstring;
let returnarray =[];

class phtml{
    constructor (pname,image,powers){
        this.pname = pname,
        this.image=image,
        this.powers=powers
    }
}
const getPokedex = async () => {
    const Pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const data = await Pokedex.json();
    pokemoNames = (data.results);
pokemoNames.forEach(async pokemoName => {
  await pokeCards(pokemoName.url,pokemoName.name);
  puttohtml();
});

}

const  pokeCards = async  (url,name) => {
    // console.log(url);
    const Pokedexurl =  await fetch(url);
    const data = await Pokedexurl.json();
    let temparr=[];
     console.log(data.types);
    temparr=data.sprites.other.dream_world;
    const  {front_default} = data.sprites.other.dream_world;
     const types= ({slot, type}=data.types);
     console.table(slot, type);
    let p = new phtml
    p.pname=name;
    p.image=front_default;
returnarray.push(p);

}

const puttohtml = () => {
    // console.log('you are here');
    const datas = returnarray.map( poked =>{
        // console.log (poked.image,poked.pname);
        return `<div class="card">
        <div class="imgBx">
            <img src="${poked.image}" alt="images"/>
        </div>
        <div class="details">
            <p>
                ${poked.pname} <br />
                <span class="material-symbols-outlined">Fireplace</span>
                <span class="material-symbols-outlined">local_fire_department</span>
                <span class="material-symbols-outlined"> detector_smoke </span>
            </p>
        </div>
        </div>` 
        
    }).join('');
      displayarea.innerHTML =  datas;
    }
getPokedex()