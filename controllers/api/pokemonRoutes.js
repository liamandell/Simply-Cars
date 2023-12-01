const router = require('express').Router();
require('dotenv').config();
console.log(process.env.POKEMON_API)


router.post('/', async (req, res) => {
    console.log(req.body,"this is req body")
    console.log("hello")
  try {
        // const apiURL = `https://api.pokemontcg.io/v2/cards?q=name:${req.body}&X-Api-Key=${proccess.env.POKEMON_API}`;
        // fetch(apiURL).then(function(response){
        //     console.log(response, "this is response")
        //     return response.json();
            
        // }).then(function(data){
        //     console.log(data, "14==========9"); 
        
        // }
        // )
       const pokemonData = await fetch (`https://api.pokemontcg.io/v2/cards?q=name:${req.body}&X-Api-Key=${process.env.POKEMON_API}`);
         console.log(pokemonData, "this is pokemon data")
  
}catch (err) {
    res.status(500).json(err);
  }})

module.exports = router;