const express = require('express');
const app = express();
const todoroutes = require('./routes/tododb.js')
require('dotenv').config();
const port = process.env.PORT;


//const port = 3300;
app.use(express.json());
app.use('/todos', todoroutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/contact', (req, res) =>{
    res.render('/contact');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});