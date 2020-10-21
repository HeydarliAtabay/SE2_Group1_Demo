'use strict';

const db = require('./db');

// returns an array with Service Types related to the given counter ID
exports.getCounterInfo = function (params) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT ServiceType FROM COUNTER_SERVICE WHERE CounterId=?";
        db.all(sql, [params.counterId], (err, rows) => {
            if(err) reject(err);
            else resolve(rows);
        });
    });
}

// add a new line into counter_service table
exports.addService = function (params) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO COUNTER_SERVICE(CounterId, ServiceType) VALUES(?, ?)";
        db.run(sql, [params.counterId, params.serviceType], (err) => {
            if(err) reject(err);
            else resolve();
        });
    });
}

// remove a line from counter_service table
exports.removeService = function (params) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM COUNTER_SERVICE WHERE CounterId=? AND ServiceType=?";
        db.run(sql, [params.counterId, params.serviceType], (err) => {
            if(err) reject(err);
            else resolve();
        });
    });
}
