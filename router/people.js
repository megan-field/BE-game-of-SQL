const router = require('express').Router();
const {getAllPeople, addNewCharacter} = require('../controllers/character');

router.get('/', getAllPeople)
router.post('/', addNewCharacter)

module.exports = router;