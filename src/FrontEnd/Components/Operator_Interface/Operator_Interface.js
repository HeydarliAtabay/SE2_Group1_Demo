import React from 'react';
import { Component } from 'react';
import OperatorHeader from './Operator_Header';
import BackButton from '../Shared/Back_Button';
import NextCustomer from './NextCustomer';
import { serviceList } from '../../Dummy_Data/Dummy_Service';

import API from '../../api/API';

class operatorInterface extends Component {
    state = {
        nextCustomer:  Math.floor((Math.random() * 50) + 1),
        //nextCustomer: API.getTicketToServe(operator_ID,Service_types),
        counterNumber: 1,
        counterServices: []
    }
    callNextCustomerHandler = () => {
        this.setState({ nextCustomer: Math.floor((Math.random() * 50) + 1) })
        //this.setState({ nextCustomer})
    };

    checkEnabled = () => {
        for (let i = 0; i < serviceList.length; i++)
            if (serviceList[i].enabled)
                return true;
        return false;
    }

    
    loadData = async () => {
        // load services list
        let counterServices = await API.getCounterServices(this.state.counterNumber);

        // let nextCustomer = await API.getNextCustomer(1);
        // this.setState({nextCustomer : nextCustomer, counterServices: counterServices });
        this.setState({counterServices: counterServices });
    }

    componentDidMount () {
        this.loadData();
    }

    render() {
        return (<div>
            <OperatorHeader />
            <div className='PageContentColumn'>
                <h5 className="SubHeader">You are operating at Counter #{this.state.counterNumber}</h5>
                <div className='PageContentRow'>
                    <div className='PageContentColumn'>
                        {this.state.counterServices.map((service) => { return <div className='Service_Enabled'>{service}</div> })}</div>
                    {(this.state.counterServices.length) ?
                        <div className='PageContentColumn'>
                            {/*<div className = 'Ticket'>{this.state.nextCustomer===0 ? '0' : this.state.nextCustomer}</div>*/}
                            <NextCustomer>{this.state.nextCustomer===0 ? '0' : this.state.nextCustomer }</NextCustomer>
                            {
                                <h2 className="SubHeader">{this.state.nextCustomer===0 ? 'No one to serve' : ''}</h2>
                            } 
                            
                            <button className='HomePage_Button' onClick={this.callNextCustomerHandler}>Call the Next Customer</button>
                        </div> :
                        <div className='PageContentColumn'>
                            <h5 className="SubHeader">No service has been assigned to this counter<br />
                            Wait for an Administrator</h5>
                        </div>}
                </div>
            </div>
            <BackButton />
        </div>)
    };

}

export default operatorInterface;