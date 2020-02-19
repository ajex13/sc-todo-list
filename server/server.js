const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');
    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => { console.log('Successfully connected to Database')},
      err => { console.log('Could not connect to Database. '+ err)}
    );
    const taskroutes = require('./routes/TaskRoute');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/tasks', taskroutes);

    const server = app.listen(port, function(){
     console.log('Listening on port : ' + port);
    });