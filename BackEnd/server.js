'use strict';
//import dao modules
const ServiceDao = require('./ServiceDao');
const CounterDao = require('./CounterDao');
const CustomerDao = require('./CounterDao');
const OperatorDao = require('./OperatorDao');


//import express
const express = require('express');
// logging middleware
const morgan = require('morgan'); 

//create application
const app = express();
const port = 3001;

// Set-up logging
app.use(morgan('tiny'));

// Process body content
app.use(express.json());

//"As an user I want to select service to be put in a correct queue"
//POST  /queue/<serviceType>/<userId>
app.post('/api/queue/:serviceType/:uderId/',(req, res) => {
    
});

//"As an operator I want to Know if there is something to do"
//GET /counter/<operatorId>

//activate server
app.listen(port, () => console.log('Server ready'));