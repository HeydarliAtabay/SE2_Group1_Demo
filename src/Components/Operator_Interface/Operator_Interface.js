import React from 'react';
import {Route, Link} from 'react-router-dom';
import OperatorHeader from './Operator_Header';

const operatorInterface = () => {
    return <div>
        <OperatorHeader/>
        <div className= 'PageContent'>
        <Link to = '/Administrator'><div className= 'HomePage_Button'>Administrator</div></Link>
        <Link to = '/User'><div className= 'HomePage_Button'>User</div></Link>
        </div>
    </div>

}

export default operatorInterface;