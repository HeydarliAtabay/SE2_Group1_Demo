let queue1 = {
    serviceType : "service1",
    queueLength : 20
};
let queue2 = {
    serviceType : "service2",
    queueLength : 30
}

let counter1 = {
    counterID: 1,
    serviceType : ["service1", "service2"],
    operatorID : 1
}

exports.addUserToQueue = (serviceType, userID) => {
    return new Promise((resolve, reject) => {
        if(serviceType === queue1.serviceType) {
            queue1.queueLength ++;
            resolve(queue1);
        } else {
            queue2.queueLength ++;
            resolve(queue1);
        }
    });
}

exports.getNextCustomer = (operatorID) => {
    return new Promise((resolve, reject) => {
        //find operator<-->counter
        resolve({customerID: 2});
    });
}