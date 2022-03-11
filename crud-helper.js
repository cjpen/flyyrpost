// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Flyyr = require('./models/flyyr')

// Local variables will come in handy for holding retrieved documents
let user, flyyr;
let users, flyyrs;

