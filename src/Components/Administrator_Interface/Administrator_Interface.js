import React from 'react';
import {Route, Link} from 'react-router-dom';
import AdministratorHeader from './Administrator_Header';

const administratorInterface = () => {
    return <div>
        <AdministratorHeader/>
        <div className= 'PageContent'>
        <Link to = '/Operator'><div className= 'HomePage_Button'>Operator</div></Link>
        <Link to = '/User'><div className= 'HomePage_Button'>User</div></Link>
        </div>
    </div>

}

export default administratorInterface;