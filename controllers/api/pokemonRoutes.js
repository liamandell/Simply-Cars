

const router = require('express').Router();




router.get('/', async (req, res) => {
    try { 
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:igor&X-Api-Key=78766eaa-a891-47bd-84d8-3e3aff4b1156`);
        const data = await response.json();
        console.log(data);

        res.render('pokemon', {pokemon: data.name});
        

    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;