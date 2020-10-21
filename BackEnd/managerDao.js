'use strict';

const db = require('./db');

exports.getServices = function () {
    return new Promise((resolve, reject) => {
        const sql = "SELECT serviceType FROM SERVICE";
        db.all(sql, (err, rows) => {
            if(err) reject(err);
            else resolve(rows);
        });
    });
}

// returns an array with Service Types related to the given counter ID
exports.getCounterInfo = function (params) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT serviceType FROM COUNTER_SERVICE WHERE counterID=?";
        db.all(sql, [params], (err, rows) => {
            if(err) reject(err);
            else resolve(rows);
        });
    });
}

// add a new line into counter_service table
exports.addService = function (counterId, serviceType) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO COUNTER_SERVICE(counterID, serviceType) VALUES(?, ?)";
        db.run(sql, [counterId, serviceType], (err) => {
            console.log(err);
            if(err) reject(err);
            else resolve();
        });
    });
}

// remove a line from counter_service table
exports.removeService = function (counterId, serviceType) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM COUNTER_SERVICE WHERE counterID=? AND serviceType=?";
        db.run(sql, [counterId, serviceType], (err) => {
            console.log(err);
            if(err) reject(err);
            else resolve();
        });
    });
}
