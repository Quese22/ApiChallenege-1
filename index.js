//const fetch = require("node-fetch");

// let baseURL = 'https://pokeapi.co/';


// {/* <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
// </ul> */}



const dragapult = "https://pokeapi.co/api/v2/pokemon/dragapult";
const gengar = 'https://pokeapi.co/api/v2/pokemon/gengar';
const sableye = 'https://pokeapi.co/api/v2/pokemon/sableye';

 function fetchPoke() {
 fetch(dragapult)
        .then(result => result.json()) //json also returns a promise so you can .then it again.
        .then(json => {
            displayPoke(json);
        })
    fetch(gengar)
        .then(result => result.json())
        .then(json => {
            displayPoke(json);
        })
    fetch(sableye)
        .then(result => result.json())
        .then(json => {
            displayPoke(json);
        });
}

 function displayPoke(pokemon) {
    let section = document.querySelector('#section');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;"; // this completes the div
    const img = document.createElement('img');
    img.src = "assets/ghostTeam.jpg";
    img.className = "card-img-top"; //this is the img
    img.style ="height = 200.500px; width: 199.250px;";
    const cardbody = document.createElement('div');
    cardbody.className = "card-body"; //this completes the cardbody div
    let header5 = document.createElement('h5');
    header5.className = "card-title"; //h5 tag
    header5.innerText = "Ghost Team";
    const paragraph = document.createElement('p');
    paragraph.className = "card-text"; //paragraph tag
    paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam purus, dapibus elementum sagittis ac, tempor ac nibh. Nullam leo.";
    const unorderd = document.createElement('ul');
    unorderd.className = 'list-group list-group-flush'; //ul list
    let listItem = document.createElement('li');
    listItem.className = "list-group-item"; //list item
    //listItem.innerText = `Pokemon Name: ${pokemon.name}`;


    //`Pokemon Name: ${pokemon.name}, Pokemon height: ${pokemon.height}, Pokemon weight: ${pokemon.weight}, Pokemon Species: ${pokemon.species.name}, Base Experience: ${pokemon.base_experience}`

    let attributes = [pokemon.name, pokemon.height, pokemon.weight, pokemon.species.name, pokemon.base_experience]

    for (i = 0; i <= attributes.length; i++) {
        listItem.innerText = `Pokemon Name: ${pokemon.name}, Pokemon height: ${pokemon.height}, Pokemon weight: ${pokemon.weight}`;

    }

    let listItem2 = document.createElement('li');
    listItem2.className="list-group-item";
    listItem2.innerText = `Pokemon Species: ${pokemon.species.name}`

    let listItem3 = document.createElement('li');
    listItem3.className= "list-group-item";
    listItem3.innerText = `Base Experience: ${pokemon.base_experience}`

    section.appendChild(cardDiv);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardbody);
    cardbody.appendChild(header5);
    cardbody.appendChild(paragraph);
    cardDiv.appendChild(unorderd);
    unorderd.appendChild(listItem);
    unorderd.appendChild(listItem2);
    unorderd.appendChild(listItem3);
    // console.log(`Pokemon Name: ${pokemon.name}`);
    // console.log(`Pokemon height: ${pokemon.height}`);
    // console.log(`Pokemon weight: ${pokemon.weight}`);
    // console.log(`Pokemon Species: ${pokemon.species.name}`);
    // console.log(`Base Experience: ${pokemon.base_experience}`);

}

fetchPoke();

const blastoise = "https://pokeapi.co/api/v2/pokemon/blastoise";
const gyarados = 'https://pokeapi.co/api/v2/pokemon/gyarados';
const tentacruel = 'https://pokeapi.co/api/v2/pokemon/tentacruel';



async function fetchPoke2() {
    await fetch(blastoise)
        .then(result => result.json()) //json also returns a promise so you can .then it again.
        .then(json => {
            displayPoke2(json);
        });
    await fetch(gyarados)
        .then(result => result.json())
        .then(json => {
            displayPoke2(json);
        });
    await fetch(tentacruel)
        .then(result => result.json())
        .then(json => {
            displayPoke2(json);
        });
}

function displayPoke2(pokemon) {
    let section3 = document.querySelector('#section3');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;"; // this completes the div
    const img = document.createElement('img');
    img.src = "assets/WATERTEAM.jpg";
    img.className = "card-img-top"; //this is the img
    const cardbody = document.createElement('div');
    cardbody.className = "card-body"; //this completes the cardbody div
    let header5 = document.createElement('h5');
    header5.className = "card-title"; //h5 tag
    header5.innerText = "Water Team";
    const paragraph = document.createElement('p');
    paragraph.className = "card-text"; //paragraph tag
    paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam purus, dapibus elementum sagittis ac, tempor ac nibh. Nullam leo.";
    const unorderd = document.createElement('ul');
    unorderd.className = 'list-group list-group-flush'; //ul list
    let listItem = document.createElement('li');
    listItem.className = "list-group-item"; //list item
    //listItem.innerText = `Pokemon Name: ${pokemon.name}`;


    //`Pokemon Name: ${pokemon.name}, Pokemon height: ${pokemon.height}, Pokemon weight: ${pokemon.weight}, Pokemon Species: ${pokemon.species.name}, Base Experience: ${pokemon.base_experience}`

    let attributes = [pokemon.name, pokemon.height, pokemon.weight, pokemon.species.name, pokemon.base_experience]

    for (i = 0; i <= attributes.length; i++) {
        listItem.innerText = `Pokemon Name: ${pokemon.name}, Pokemon height: ${pokemon.height}, Pokemon weight: ${pokemon.weight}`;

    }

    let listItem2 = document.createElement('li');
    listItem2.className="list-group-item";
    listItem2.innerText = `Pokemon Species: ${pokemon.species.name}`

    let listItem3 = document.createElement('li');
    listItem3.className= "list-group-item";
    listItem3.innerText = `Base Experience: ${pokemon.base_experience}`

    section3.appendChild(cardDiv);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardbody);
    cardbody.appendChild(header5);
    cardbody.appendChild(paragraph);
    cardDiv.appendChild(unorderd);
    unorderd.appendChild(listItem);
    unorderd.appendChild(listItem2);
    unorderd.appendChild(listItem3);
    // console.log(`Pokemon Name: ${pokemon.name}`);
    // console.log(`Pokemon height: ${pokemon.height}`);
    // console.log(`Pokemon weight: ${pokemon.weight}`);
    // console.log(`Pokemon Species: ${pokemon.species.name}`);
    // console.log(`Base Experience: ${pokemon.base_experience}`);


}
    


let VSimg = document.createElement('input');
VSimg.type = "image";
VSimg.src = "assets/VSimg.jpg";
VSimg.style = "height: 5em; width: 5em;";
let section2 = document.querySelector('#section2');
section2.appendChild(VSimg);

VSimg.addEventListener('click', () => {
    fetchPoke2()
    

});





