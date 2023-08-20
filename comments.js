//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Import DB config
const db = require('./config/database');

// Test DB connection
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

//Import Routes
const comments = require('./routes/api/comments');

//Use Routes
app.use('/api/comments', comments);

//Listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));