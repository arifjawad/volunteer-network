import React, { useEffect, useState } from 'react';
import Events from "../Events/Events"

// const events = [
//     {
//         name: 'Child Support',
//         img: 'childSupport.png'
//     },
//     {
//         name: 'Animal Shelter',
//         img: 'animalShelter.png'
//     },
//     {
//         name: 'Baby Sit',
//         img: 'babySit.png'
//     },
//     {
//         name: 'Bird House',
//         img: 'birdHouse.png'
//     },
//     {
//         name: 'Child Support',
//         img: 'childSupport.png'
//     },
//     {
//         name: 'Clean Water',
//         img: 'cleanWater.png'
//     },
//     {
//         name: 'Child Support',
//         img: 'childSupport.png'
//     },
//     {
//         name: 'Clearn Park',
//         img: 'clearnPark.png'
//     }
// ]
const Home = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])

    return (
        <>
            <div className="row">
                {
                    events.map(events => <Events event={events}></Events>)
                }
            </div>

        </>
    );
};

export default Home;