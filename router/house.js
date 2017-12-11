const router = require('express').Router();
const {getAllHouses, getHouseById, addHouse} = require('../controllers/houses')


router.get('/', getAllHouses)
router.post('/', addHouse)
router.get('/:id', getHouseById)


module.exports = router;