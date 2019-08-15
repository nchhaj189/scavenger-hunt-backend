const express = require('express'); 
const app = express(); 
const routes = require('./routes'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

app.all('/*', routes);

app.use((req, res) => res.sendStatus(404));

let server = app.listen( 3000, () => {
    console.log('Listening on port: 3000');
});

module.exports = server;