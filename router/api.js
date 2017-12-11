const router = require('express').Router()
const {getAllHouses, getHouseById, addHouse} = require('../controllers/houses')
const houseRouter = require('./house');
const peopleRouter = require('./people');

router.use('/houses', houseRouter)
router.use('/people', peopleRouter)





module.exports = router;

