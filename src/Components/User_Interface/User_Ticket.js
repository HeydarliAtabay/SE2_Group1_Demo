import React from 'react';

const userTicket = (props) => {
    return <div className = 'Ticket'>{Math.floor((Math.random() * 50) + 1)}</div>

}

export default userTicket;