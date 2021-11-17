import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import SideNav from '../PanelSections/SideNav';


const VolunteerList = () => {

    return (
        <>
            <section className="container">
                <div className="flex flex-wrap">

                    <div className="flex-1">
                        <SideNav></SideNav>
                    </div>

                    <div className="mt-20 flex-1">
                        <h1 className="text-center font-bold text-4xl border-b-2 p-3">Volunteers list</h1>
                        <div className="mt-20 border-2">
                            <table className="table-fixed font-light">

                                <thead className="bg-gray-100">
                                    <tr className="p-3 text-xl border-b-2 border-solid border-gray-200">

                                        <th className="p-3">Name</th>
                                        <th className="p-3">Email ID</th>
                                        <th className="p-6">Registration Date</th>
                                        <th className="p-3 ">Event </th>
                                        <th className="p-3">Take Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="p-3 text-lg border-b-2 border-solid border-gray-200 text-center">

                                        <td className="p-3 w-1/8">Intro to sssssssdds</td>
                                        <td className="p-3 w-1/6">Adam</td>
                                        <td className="p-3 w-1/3">858</td>
                                        <td className="p-3 w-1/6">Adam</td>
                                        <td className="p-3 w-1/5">

                                            <button className="font-bold px-3 py-1 border-2 rounded-xl shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                <FontAwesomeIcon className=" text-red-700 fa-sm" icon={faTrashAlt} />
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default VolunteerList;