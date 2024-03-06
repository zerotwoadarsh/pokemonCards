
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;


    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
        });

}

let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefence = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    
    
    card.innerHTML = `
    <p class="hp">
    <span>HP</span>
    ${hp}
    </p>
    <img src=${imgSrc} alt="">
    <h2>${pokeName}</h2>
    <div class="data">
    <p>Attack ${statAttack}</p>
    <p>Defence ${statDefence}</p>
    <p>Speed ${statSpeed}</p>
    </div>
    `

    appendTypes(data.types)

}
                btn.addEventListener("click", getData);
                window.addEventListener("load", getData);