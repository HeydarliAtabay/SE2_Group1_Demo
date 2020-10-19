import React from 'react';
import { Component } from 'react';
import UserHeader from './User_Header';
import BackButton from '../Shared/Back_Button';
import UserTicket from './User_Ticket';
import { serviceList } from '../../Dummy_Data/Dummy_Service'


class userInterface extends Component {

    state = { selected: false }
    serviceSelectedHandler = () => {
        this.setState({selected: true})
    };
    serviceList = serviceList;
    render() {
        return (<div>
            <UserHeader />
            <div className='PageContent'>
                    <h5 className="SubHeader">{this.state.selected? 'Your number is:' : 'Service List:'}</h5>
                    {this.state.selected ? <UserTicket/> :
                        this.serviceList.map((service) => { return <button className='HomePage_Button' onClick ={this.serviceSelectedHandler}>{service.name}</button> })
                    }
            </div>
            <BackButton />
        </div>)
    };

}

export default userInterface;