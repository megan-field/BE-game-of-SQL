const db = require('../db/index')

function getAllPeople (req, res, next) {
    db.many('SELECT * FROM people')
    .then((people) => {
        res.status(200)
        res.send({people})
    })
    .catch(err => next(err));
} 

function addNewCharacter (req, res, next) {
    const {name, picture_url, dead, house_id, religion_id} = req.body
    db.one('INSERT INTO people (name, picture_url, dead, house_id, religion_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, picture_url, dead, house_id, religion_id])
    .then((people) => {
        res.status(201)
        res.send({people})
    })
    .catch(err => next(err));
} 

function getPersonById (req, res, next){
   const id = req.params.id
    db.one(`SELECT * FROM people where id = ${id}`)
    .then((person)=>{
        res.status(200)
        res.send({person})
    })
    .catch(err=> next(err))
}

module.exports = {getAllPeople, addNewCharacter, getPersonById}