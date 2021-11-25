import React, { useEffect, useState } from 'react';
import SideNav from '../PanelSections/SideNav';
import EventCard from '../PanelSections/EventCard';
import ReactPaginate from 'react-paginate';


function Items({ currentItems }) {
    return (
        <>
            <div className="flex flex-row justify-center flex-initial">
                {currentItems &&
                    currentItems.map((item, key) => (
                        <EventCard eventInfo={item} key={key}></EventCard>
                    ))}
            </div>
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [items, setEvents] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        fetch('https://volunteers-network-server.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="flex flex-row justify-center mt-60">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="flex flex-row justify-center text-xl w-1/6 m-12"
                    pageClassName="ml-3 border rounded bg-gray-200 px-2"
                    activeClassName="bg-green-700 text-white"
                    nextClassName="text-blue-700 ml-3 border rounded bg-gray-200 px-2"
                    previousClassName="text-blue-700 border rounded bg-gray-200 px-2"

                />
            </div>
        </>
    );
}



const ViewEvents = () => {


    return (
        <>
            <section className="containers">
                <div className="flex">
                    <div className="flex-initial">
                        <SideNav></SideNav>
                    </div>
                    <div className="mt-20 flex-1">
                        <h1 className="text-center font-bold text-4xl border-b-2 p-3 mb-20">All Events</h1>
                        <div className="flex-initial">
                            <PaginatedItems itemsPerPage={4} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewEvents;