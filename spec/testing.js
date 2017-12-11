process.env.NODE_ENV = 'test';
console.log(process.env.NODE_ENV)
const app = require('../app');
const request = require('supertest')(app);
const {expect} = require('chai');

describe('/api', () => {
    describe('/houses', () => {
        it('GET returns object with houses array and returns a 200 status', () => {
            return request
                .get('/api/houses')
                .expect(200)
                .then(res => {
                    expect(Array.isArray(res.body.houses)).to.be.true
                    expect(res.body).to.be.an('object')
                    expect(res.body.houses[0].house_name).to.equal('Stark')
                })

        });
    });
    describe('/houses/:id', () => {
        it('GET returns object with an individual house array and returns a 200 status', () => {
            return request
                .get('/api/houses/2')
                .expect(200)
                .then(res => {
                    expect(res.body.house).to.be.an('object')
                    expect(res.body.house.house_name).to.equal('Lannister')
                });

        });
    });
    describe('/houses', () => {
        it('POST returns object with an individual house array and returns a 200 status', () => {
            return request
                .post('/api/houses')
                .send({house_name: 'Campbell', sigil_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Clan_member_crest_badge_-_Clan_Campbell.svg/1200px-Clan_member_crest_badge_-_Clan_Campbell.svg.png', words: 'Ne Obliviscaris' , seat: 'Argyll', region: 'Argyll'})
                .expect(201)
                .then(res => {
                    expect(res.body.house.house_name).to.equal('Campbell')
                    return request
                    .get('/api/houses')
                    .then(res=>{
                        expect(res.body.houses.length).to.equal(3)
                    });
                });
        });
    });

    describe('/people', () => {
        it('GET returns an object with every person in it and returns a 200 status', () => {
            return request
                .get('/api/people')
                .expect(200)
                .then(res => {
                    expect(Array.isArray(res.body.people)).to.be.true
                    expect(res.body.people[0].name).to.equal('Ned Stark')
                });
        });
    });
    describe('/people', () => {
        it('POST returns object of a new person added and returns a 201 status', () => {
            return request
                .post('/api/people')
                .send({name: 'Hodor', picture_url: 'http://static6.businessinsider.com/image/570e877add089569448b45e0/we-finally-know-how-hodor-got-his-name-and-fans-guessed-the-heartbreaking-reveal-years-ago.jpg', dead: true, house_id: 1, religion_id: 1})
                .expect(201)
                .then(res => {
                    expect(res.body.people.name).to.equal('Hodor')
                    return request
                    .get('/api/people')
                    .then(res=>{
                        expect(res.body.people.length).to.equal(3)
                    });
                });
        });
    });
    describe('/people/:id', () => {
        it('GET returns object with an individual person in an array and returns a 200 status', () => {
            return request
                .get('/api/people/2')
                .expect(200)
                .then(res => {
                    expect(res.body.person).to.be.an('object')
                    expect(res.body.person.name).to.equal('Catelyn Stark')
                });

        });
    });
    // describe('/people', () => {
    //     it('GET returns object with dead and religion queries when requested and returns a 200 status', () => {
    //         return request
    //         .get('/api/people?dead=false')
    //         console.log(req.query)
    //             // false&religion=Old%Gods%of%the%Forest
    //             .expect(200)
    //             .then(res => {
    //                 console.log(res.body)
    //                 expect(res.body.people).to.be.an('object')
    //                 expect(res.body.people.name).to.equal('Ned Stark')
    //             });

    //     });
    // });
      
      
      
      
      
});
    
