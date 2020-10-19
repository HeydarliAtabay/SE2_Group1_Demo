export class dummyService{
    constructor(name){
        this.name= name;
    }
}

export const serviceList = [new dummyService('Service1'), new dummyService('Service2'), new dummyService('Service3'), new dummyService('Service4'),]
