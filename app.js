process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = require('express')();
app.set('view engine', 'ejs');
const bodyParser = require('body-parser')
const apiRouter = require('./router/api')

app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send('all good')
})

app.use('/api', apiRouter)

app.use('/*', (req, res)=>{
    res.status(404).send('Sorry that page could not be found');
});

app.use((err,req,res,next)=>{
res.status(500).send(err);
});


module.exports = app;