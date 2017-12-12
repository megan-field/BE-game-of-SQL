const db = require('../db/index')


function getAllHouses (req, res, next) {
db.many('SELECT * FROM houses')
.then((houses)=>{
res.render('pages/index', {houses})
})
.catch(err => next(err));
}

function getHouseById (req, res, next) {
    const id = req.params.id

    db.one(`SELECT * FROM houses where id = ${id}`)
    .then((house)=>{
        res.send({house})
    })
    .catch(err => next(err))
}

function addHouse (req, res, next) {
    const {house_name, sigil_img, words, seat, region} = req.body
    db.one('INSERT INTO houses (house_name, sigil_img, words, seat, region) VALUES ($1,$2,$3,$4,$5) RETURNING *', [house_name, sigil_img, words, seat, region])
    .then(house => res.status(201).send({house}))
    .catch(err => next(err))
}

module.exports = {getAllHouses, getHouseById, addHouse}