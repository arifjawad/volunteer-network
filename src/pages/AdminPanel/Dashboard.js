import React from 'react';

import SideNav from './PanelSections/SideNav';


const Dashboard = () => {
    return (
        <>
            <section>
                <div className="bg-gray-200">
                    <SideNav></SideNav>
                </div>
            </section>
        </>
    );
};

export default Dashboard;