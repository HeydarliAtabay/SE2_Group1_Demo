import React from 'react';
import { Component } from 'react';
import UserHeader from './User_Header';
import BackButton from '../Shared/Back_Button';
import UserTicket from './User_Ticket';
import { serviceList } from '../../Dummy_Data/Dummy_Service'


import nextCustomer from '../Operator_Interface/NextCustomer'
import userTicket from './User_Ticket';

class userInterface extends Component {

    state = { selected: false }
    serviceSelectedHandler = () => {
        this.setState({ selected: true })
    };
    serviceList = serviceList;
    render() {
        return (<div>
            <UserHeader />
            <div className='PageContentColumn'>
                <h5 className="SubHeader">{this.state.selected ? 'Your number is:' : 'Service List:'}</h5>
                {this.state.selected ? <UserTicket /> :
                    this.serviceList.map((service) => { return <button className='HomePage_Button' onClick={this.serviceSelectedHandler}>{service.name}</button> })
                }
            </div>
                {
                this.state.selected ? 
                    <nextCustomer><h5 className="SubHeader">{nextCustomer===userTicket ? 'Now it is your turn' : 'Wait'}</h5></nextCustomer>  :  <h3></h3>              
                }

            <BackButton />
        </div>)
    };

}

export default userInterface;