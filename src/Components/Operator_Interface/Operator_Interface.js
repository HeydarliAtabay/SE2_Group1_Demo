import React from 'react';
import{Component} from 'react';
import OperatorHeader from './Operator_Header';
import BackButton from '../Shared/Back_Button';
import {taskList} from '../../Dummy_Data/Dummy_Service'


class operatorInterface extends Component {
    render(){
    return (<div>
        <OperatorHeader/>
        <div className= 'PageContent'>
        </div>
        <BackButton />
    </div>)};

}

export default operatorInterface;