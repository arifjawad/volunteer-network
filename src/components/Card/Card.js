import React from 'react';

const Card = ({ event }) => {

    return (
        <>
            <div className="max-w-sm p-4 bg-white rounded-xl shadow-md sm:flex sm:flex-col sm:justify-center sm:items-center sm:py-4">
                <img className="h-48" src={event.imageUrl} alt="" />

                <div className="text-center sm:text-center bg">
                    <div className="space-y-0.5 ">
                        <p className="p-4 text-lg text-black font-semibold">{event.eventName}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;