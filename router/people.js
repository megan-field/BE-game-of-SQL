const router = require('express').Router();
const {getAllPeople, addNewCharacter, getPersonById, getPersonByQuery} = require('../controllers/character');

router.get('/', getAllPeople)
router.get('/:id', getPersonById)
router.post('/', addNewCharacter)
router.get('/', getPersonByQuery)


module.exports = router;