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
        console.log(services);
        let counterServices = await API.getCounterServices(this.state.counterNumber);
        console.log(counterServices);
        let servicesStatus = services.map( (s) => {
            return counterServices.includes(s);
        });
        console.log(servicesStatus);
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
    }

    render() {
        return (<div>
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
        </div>);
    }

}

export default administratorInterface;