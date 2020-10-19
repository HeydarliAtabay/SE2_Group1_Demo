import React from 'react';
import { Component } from 'react';
import AdministratorHeader from './Administrator_Header';
import BackButton from '../Shared/Back_Button';
import ShowService from '../Shared/ShowService';
import { serviceList } from '../../Dummy_Data/Dummy_Service'

class administratorInterface extends Component {

    //serviceList = serviceList;

    state = { counterNumber: 1 }

    render() {
        return (<div>
            <AdministratorHeader />
            <div className='PageContentRow'>
                <div className='PageContentColumn'>
                    <h5 className="SubHeader"> Configuration of Counter #{this.state.counterNumber}</h5>
                    {serviceList.map((service) => { return <button className={(service.enabled) ? 'Service_Enabled' : 'Service_Disabled'} onClick={() => { service.toggleService(); this.setState(this.state); }}>{service.name}</button> })}
                </div>
            </div>
            <BackButton />
        </div>);
    }

}

export default administratorInterface;