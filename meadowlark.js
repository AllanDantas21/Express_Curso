const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({
   defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

// ROTAS DO APP
//rota do home
app.get('/', (req, res) => res.render('home'))
//Rota do about
app.get('/about', (req, res) => res.render('about'))

//página 404 personalizada 
 app.use((req,res) => {
    res.status(404)
    res.send('404')
 })

 //página 500 personalizada 
 app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.send('500 - Server Error')
 })

 app.listen(port, () => console.log(
    `Express started on http://localhost:${port} ` +
    `press Ctrl-C to terminate...`))