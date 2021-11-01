import React from 'react';

const Events = ({ event }) => {
    return (
        <>
            <div className="col-md-3">
                <img style={{ height: '300px' }} src={event.imageUrl} alt="" />
                <h3>{event.eventName}</h3>
            </div>
        </>
    );
};

export default Events;