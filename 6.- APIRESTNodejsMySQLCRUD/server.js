const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');

const app = express();

app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '27132419',
    database: 'library'
};

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// routes -------------------------------------------
app.get('/', (req, res) => {
    res.send('Bienvenido a nuestra API!');
});
app.use('/api', routes);

// server running -----------------------------------
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
});