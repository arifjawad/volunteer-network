import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import SideNav from '../PanelSections/SideNav';


const VolunteerList = () => {
    return (
        <>
            <section>
                <div className="bg-gray-200">
                    <SideNav></SideNav>
                </div>
            </section>

            <section>
                <div className="float-left">
                    <h3>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non molestias voluptatum commodi quidem, quia placeat!</h3>
                </div>
            </section>

        </>
    );
};

export default VolunteerList;