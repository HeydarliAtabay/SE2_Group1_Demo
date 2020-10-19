import React from 'react';
import {Route, Link} from 'react-router-dom';
import MenuHeader from './Menu_Header';

const homepageMenu = () => {
    return <div>
        <MenuHeader/>
        <div className= 'PageContent'>
        <Link to = '/Administrator'><div className= 'HomePage_Button'>Administrator</div></Link>
        <Link to = '/Operator'><div className= 'HomePage_Button'>Operator</div></Link>
        <Link to = '/User'><div className= 'HomePage_Button'>User</div></Link>
        </div>
    </div>

}

export default homepageMenu;