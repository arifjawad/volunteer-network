import React from 'react';

const EventCard = ({ eventInfo }) => {
    return (
        <>
            <div className="mt-10 p-2 bg-white rounded-xl shadow-md flex flex-row justify-center items-center py-4">
                <div className="flex-1">
                    <img className="w-48 h-48 rounded-sm" src={eventInfo.imageUrl} alt="" />
                </div>

                <div className="flex-1 ">
                    <p className="p-4 text-lg text-green-600 font-semibold">{eventInfo.eventName}</p>
                    <div className="text-center flex flex-row px-3 mt-10">
                        <button className="bg-yellow-500 flex-1 w-14 h-8 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Edit
                        </button>
                        <button className="bg-red-500 flex-1 w-14 h-8 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default EventCard;