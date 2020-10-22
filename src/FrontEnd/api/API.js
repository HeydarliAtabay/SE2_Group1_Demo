import nextCustomer from '../Components/Operator_Interface/NextCustomer';
import Customer from './Customer';
const baseURL = "/api";


//when the button "Call the next Customer" is pressed
async function getNextCustomer(Operator_ID) {
    const response = await fetch(baseURL + `/counter/${Operator_ID}`);
    const nextCustomerJson = await response.json();
    if(response.ok) return new Customer(nextCustomerJson.customerID);
    else {
        let err = { status: response.status, errObj: nextCustomerJson };
        throw err;
    }
}

//when the Customer choose the type of service
async function getCustomerTicket(Service_type){



}

async function getServices() {
    const response = await fetch(baseURL + "/services");
    const servicesJson = await response.json();
    if(response.ok) return servicesJson.map((s) => s.serviceType);
    else {
        let err = { status: response.status, errObj: servicesJson };
        throw err;
    }
}

async function getCounterServices(counterId) {
    const response = await fetch(baseURL + "/services/" + counterId);
    const servicesJson = await response.json();
    if(response.ok) return servicesJson.map((s) => s.serviceType);
    else {
        let err = { status: response.status, errObj: servicesJson };
        throw err;
    }
}

async function addCounterService(counterId, serviceType) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + "/addService", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({counterId: counterId, serviceType: serviceType})
        }).then( (response) => {
            if(response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then( (obj) => {reject(obj);} ) // error msg in the response body
                    .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function deleteCounterService(counterId, serviceType) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + "/removeService?counterId=" + counterId + "&serviceType=" + serviceType, {
            method: 'DELETE'
        }).then( (response) => {
            if(response.ok) {resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then( (obj) => {reject(obj);} ) // error msg in the response body
                    .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}


const API = {getCustomerTicket, getNextCustomer, getServices, getCounterServices, addCounterService, deleteCounterService};
export default API;