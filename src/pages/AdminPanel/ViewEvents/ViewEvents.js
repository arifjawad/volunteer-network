import React, { useEffect, useState } from 'react';
import SideNav from '../PanelSections/SideNav';
import EventCard from '../PanelSections/EventCard';

const ViewEvents = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://volunteers-network-server.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    })

    return (
        <>
            <section className="container">
                <div className="flex flex-wrap">

                    <div className="flex-1">
                        <SideNav></SideNav>
                    </div>



                    <div className="mt-20 flex-1">
                        <h1 className="text-center font-bold text-4xl border-b-2 p-3 mb-20">All Events</h1>





                        <div className="w-2/3">
                            {
                                events.map(eventData => <EventCard eventInfo={eventData}></EventCard>)

                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewEvents;