const router = require('express').Router();
const {getAllPeople, addNewCharacter, getPersonById} = require('../controllers/character');

router.get('/', getAllPeople)
router.get('/:id', getPersonById)
router.post('/', addNewCharacter)

module.exports = router;