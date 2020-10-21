'use strict';
const express = require('express'); //import express
const morgan = require('morgan');   // logging middleware
const {check, validationResult} = require('express-validator');

//import dao modules
const ServiceDao = require('./ServiceDao');
// Repetition? Keep only customer?
const CounterDao = require('./CounterDao');
const CustomerDao = require('./CounterDao');
const OperatorDao = require('./OperatorDao');
const managerDao = require('./managerDao');


//create application
const app = new express();
const port = 3001;

// activate server
app.listen(port, () => console.log('Server ready'));

// Set-up logging
app.use(morgan('tiny'));

// Process body content
app.use(express.json());

//"As an user I want to select service to be put in a correct queue"
//POST  /queue
//body --> { serviceType, userID}
app.post('/api/queue/',(req, res) => {
    CounterDao.addUserToQueue(req.body.serviceType, req.body.userID)
    .then((answer) =>  res.status(201).json({"queueID" : answer.queueLength, "msg" : "Added Customer"}));
});

//"As an operator I want to Know if there is something to do"
//GET /counter/<operatorId>
app.get('/api/counter/:operatorID', (req, res) => {
    CounterDao.getNextCustomer(req.operatorID)
    .then((counter) => res.json());
});

// MANAGER APIs

app.get('/api/services', (req, res) => {
    managerDao.getServices()
        .then((servicess) => res.json(servicess))
        .catch((err) => res.status(500).json({errors: [{'msg': err}] }));
})

// returns an array with Service Types related to the given counter ID
// GET /api/counterId/services
app.get('/api/services/:counterID', (req, res) => {
    managerDao.getCounterInfo(req.params.counterId)
        .then((services) => res.json(services))
        .catch((err) => res.status(500).json({errors: [{'msg': err}] }));
});

// add a service to a counter
// POST /api/addService
app.post('/api/addService', [
    check('counterId').isNumeric(),
    check('serviceType').isAlphanumeric()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
    managerDao.addService(req.body.counterId, req.body.serviceType)
        .then( () => res.status(201).end() )
        .catch((err) => {
            res.status(500).json({errors: [{'param': 'Server', 'msg': err}],})
        });
});

// remove a service from a counter
// DELETE /api/removeService?counterId=?&serviceType=?
app.delete('/api/removeService', (req, res) => {
    managerDao.removeService(req.query.counterId, req.query.serviceType)
        .then( () => res.status(204).end() )
        .catch((err) => {
            res.status(500).json({errors: [{'param': 'Server', 'msg': err}],})
        });
});

