const baseURL = "/api";

//when the button "Call the next Customer" is pressed
async function getTicketToServe(Operator_ID,Service_types) {




}

//when the Customer choose the type of service
async function getCustomerTicket(Service_type){



}

async function getServices() {
    const response = await fetch(baseURL + "/services");
    const servicesJson = await response.json();
    if(response.ok) return servicesJson; // .map((c) => Car.from(c));
    else {
        let err = { status: response.status, errObj: servicesJson };
        throw err;
    }
}

async function getCounterServices(counterId) {
    const response = await fetch(baseURL + "/services/" + counterId);
    const servicesJson = await response.json();
    if(response.ok) return servicesJson; // .map((c) => Car.from(c));
    else {
        let err = { status: response.status, errObj: servicesJson };
        throw err;
    }
}


const API = {getCustomerTicket, getTicketToServe, getServices, getCounterServices};
export default API;