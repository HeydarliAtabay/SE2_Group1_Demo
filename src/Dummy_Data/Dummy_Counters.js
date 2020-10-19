
class dummyCounter{
    constructor(name, number){
        this.name= name;
        this.number= number;
        for(let i= 0; i< number; i++)
        {
            this.taskAssigned[i] = false;
        }

    }


}

export let counterList = [new dummyCounter('c1', taskList.length), new dummyCounter('c2', taskList.length), new dummyCounter('c1', taskList.length),]