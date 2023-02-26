const express = require('express');
const { Sequelize } = require('sequelize');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;
const {User} = require('./models');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', allRoutes);

Sequelize.afterSync({force:true}).then(function() {
    app.listen(PORT,function() {
        console.log('App listening on Port ' + PORT);
    });
})