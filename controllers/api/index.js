const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const pokemonRoutes = require('./pokemonRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/pokemon', pokemonRoutes);

module.exports = router;
