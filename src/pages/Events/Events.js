import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://volunteers-network-server.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])
    console.log(events)
    return (
        <>
            <section>
                <div className="lg:container lg:mx-auto p-8">
                    <div className="grid grid-cols-4 gap-8 justify-center">
                        {
                            events.map(events => <Card event={events}></Card>)

                        }
                    </div>
                </div>

            </section>
        </>
    );
};

export default Events;