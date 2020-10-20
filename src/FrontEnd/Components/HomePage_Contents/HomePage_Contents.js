import React from 'react';
import {Route, Link} from 'react-router-dom';
import HomepageMenu from '../HomePage_Menu/HomePage_Menu';
import AdministratorInterface from '../Administrator_Interface/Administrator_Interface';
import OperatorInterface from '../Operator_Interface/Operator_Interface';
import UserInterface from '../User_Interface/User_Interface';


const homepageContents = () => {
    return <div>
        <Route path="/" exact component= {HomepageMenu}/>
        <Route path="/Administrator" exact component= {AdministratorInterface}/>
        <Route path="/Operator" exact component= {OperatorInterface}/>
        <Route path="/User" exact component= {UserInterface}/>
    </div>

}

export default homepageContents;