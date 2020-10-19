import React from 'react';
import {Route, Link} from 'react-router-dom';

const backButton = () => {
    return  <Link to = '/'><div className= 'Back_Button'><i></i> <span>Back</span></div></Link>

}

export default backButton;