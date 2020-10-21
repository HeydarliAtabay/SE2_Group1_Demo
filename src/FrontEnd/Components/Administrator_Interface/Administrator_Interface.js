import React from 'react';
import { Component } from 'react';
import AdministratorHeader from './Administrator_Header';
import BackButton from '../Shared/Back_Button';
import ShowService from '../Shared/ShowService';
import { serviceList } from '../../Dummy_Data/Dummy_Service'
import API from "../../api/API";

class administratorInterface extends Component {

    //serviceList = serviceList;
    constructor(props) {
        super(props);
        this.state = {
            counterNumber: 1,
            services: [],
            counterServices: [],
            serviceList: []
        }
    }

    loadData = async () => {
        let services = await API.getServices();
        let counterServices = await API.getCounterServices(this.state.counterNumber);
        let servicesStatus = services.map( (s) => {
            return counterServices.includes(s);
        });
        this.setState({
            services: services,
            counterService: counterServices,
            servicesStatus: servicesStatus
        });
    }

    componentDidMount() {
        this.loadData();
    }

    handleClick = (i) => {
        let status = this.state.servicesStatus;
        status[i] = !status[i];
        this.setState({servicesStatus: status});
        if(status[i])
            API.addCounterService(this.state.counterNumber, this.state.services[i]);
        else
            API.deleteCounterService(this.state.counterNumber, this.state.services[i]);
    }

    render() {
        return <div>
            <AdministratorHeader />
            <div className='PageContentRow'>
                <div className='PageContentColumn'>
                    <h5 className="SubHeader"> Configuration of Counter #{this.state.counterNumber}</h5>
                    {this.state.services.map((service, i) => {
                        return <button className={(this.state.servicesStatus[i]) ? 'Service_Enabled' : 'Service_Disabled'}
                                       onClick={() => this.handleClick(i)}>{service}</button> })}
                </div>
            </div>
            <BackButton />
        </div>;
    }

}

export default administratorInterface;