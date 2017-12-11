
const app = require('./app.js')
const PORT = require('./config').PORT
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}...`)
})

