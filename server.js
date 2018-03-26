const express = require('express');
const bodyParser = require('body-parser');
const config     = require('./config');
const morgan = require('morgan');
const mongoose =  require('mongoose');
const cors = require('cors');
const app = express();
const port = config.PORT;


mongoose.connect(config.database.MONGODB_URL);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database.MONGODB_URL);
});
mongoose.connection.on('error', (err) => {
    console.log('Error in database '+ config.database.MONGODB_URL);
    console.log(err);
});

app.use(morgan('dev'));
app.use(bodyParser({extended: false}));
app.use(cors());

require('./routes')(app);

app.listen(port, () => {
    console.log(" is listenning on port: " + port);
});