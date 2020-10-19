import React from 'react';
import {Route, Link} from 'react-router-dom';
import UserHeader from './User_Header';

const userInterface = () => {
    return <div>
        <UserHeader/>
        <div className= 'PageContent'>
        <Link to = '/Administrator'><div className= 'HomePage_Button'>Administrator</div></Link>
        <Link to = '/Operator'><div className= 'HomePage_Button'>Operator</div></Link>
        </div>
    </div>

}

export default userInterface;