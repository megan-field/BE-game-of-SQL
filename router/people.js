const router = require('express').Router();
const {getAllPeople, addNewCharacter, getPersonById, changeStatus, getPeopleByHouse} = require('../controllers/character');

router.get('/', getAllPeople)
router.post('/', addNewCharacter)
router.get('/:id', getPersonById)
router.patch('/:id', changeStatus)
router.get('/house/:house_id', getPeopleByHouse)




module.exports = router;