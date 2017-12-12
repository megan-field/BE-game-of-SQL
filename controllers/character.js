const db = require('../db/index')

function getAllPeople (req, res, next) {
    
  if (req.query.dead)  aliveOrDead(req, res, next) 
  else if (req.query.religion_id)  peopleByReligion(req, res, next) 
else
{ 
    db.many('SELECT * FROM people JOIN houses ON people.house_id = houses.id')
    .then((people) => {
        res.status(200)
        res.render('pages/people', {people})
    })
    .catch(err => next(err));
}
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

function aliveOrDead (req, res, next){
    db.many('SELECT * FROM people where dead = $1',[req.query.dead])
    .then((people)=>{
        res.status(200)
        res.send({people})
    })
    .catch(err=> next(err))
}
function peopleByReligion (req, res, next){
    db.many('SELECT * FROM people where religion_id = $1',[req.query.religion_id])
    .then((people)=>{
        res.status(200)
        res.send({people})
    })
    .catch(err=> next(err))
}

function changeStatus (req, res, next) {
    const id = req.params.id;
    const status = req.body.dead;
    db.one('UPDATE people SET dead = $1 WHERE id = $2 RETURNING *', [status, id])
    .then((person) => {
        res.status(201)
        res.send({person})
    })
    .catch(err=> next(err))
}

function getPeopleByHouse (req, res, next) {
    db.many('SELECT * FROM people where house_id = $1', [req.params.house_id])
    .then((people) => {
        res.status(200)
        res.send({people})
    })
    .catch(err => next(err))
}



module.exports = {getAllPeople, addNewCharacter, getPersonById, changeStatus, getPeopleByHouse}