async function getPokemon(searchInput) {
    const loadingDiv = document.querySelector('.loading');
    loadingDiv.style.display = 'block';
    let someDiv = document.querySelector(".pokemon-div");
    try {
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchInput}&X-Api-Key=78766eaa-a891-47bd-84d8-3e3aff4b1156`);
      const data = await response.json();
      const firstData = data.data;
  
      for (let i = 0; i < 20; i++) {
        const pokemonName = firstData[i].name;
        const flavor = firstData[i].flavorText;
        const pikaCardImageLink = firstData[i].images.large;
        const pikaImage = `<img src="${pikaCardImageLink}"/>`;
  
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.innerHTML = `
          ${pikaImage}
          <p>Name: ${pokemonName}</p>
          <p>Flavor?: ${flavor}</p>
          <button class="attack-btn" data-index="${i}">See attacks</button>
        `;
        someDiv.appendChild(cardContainer);
      }
  
      const attackButtons = document.querySelectorAll(".attack-btn");
      attackButtons.forEach(button => {
        button.addEventListener("click", function () {
          const index = this.getAttribute('data-index');
          showAttacks(firstData[index].attacks);
        });
      });
      loadingDiv.style.display = 'none';
    } catch (error) {
      console.error(error);
      loadingDiv.style.display = 'none';
    }
  }
  
  function showAttacks(attacks) {
    const attackHome = document.createElement('ul');
    attackHome.className += "attack-details"
    attacks.forEach((attack) => {
      attackHome.innerHTML += `
        <li id="attack-name" >${attack.name}</li>
        <li id="attack-text" >Description: ${attack.text}</li>
        <li id="attack-damage" >Damage: ${attack.damage}</li>
      `;
    });
  
    const pokeCard = event.target.parentElement;
    pokeCard.appendChild(attackHome);
  }
  
  document.querySelector("#pokemon-form").addEventListener('submit', function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value.trim();
    getPokemon(searchInput);
  });
  