import React from 'react';
import SideNav from './PanelSections/SideNav';


const Dashboard = () => {

    return (
        <>
            <section className="col-span-2">
                <div className="bg-gray-200">
                    <SideNav></SideNav>
                </div>

                <div className="">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus sed necessitatibus rem, dicta maxime?</h1>
                </div>
            </section>
        </>
    );
};

export default Dashboard;