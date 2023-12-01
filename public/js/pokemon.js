//require("dotenv").config();
var key = "78766eaa-a891-47bd-84d8-3e3aff4b1156"
function getPokemon(){
    let apiURL = `https://api.pokemontcg.io/v2/cards?q=name:charizard&X-Api-Key=${key}`;
    fetch(apiURL).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    }
    )
}
getPokemon();