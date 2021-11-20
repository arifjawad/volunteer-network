import React from 'react';
import SideNav from './PanelSections/SideNav';


const Dashboard = () => {

    return (
        <>
            <section className="container">
                <div className="flex flex-wrap">

                    <div className="flex-1">
                        <SideNav></SideNav>
                    </div>

                    <div className="mt-20 flex-1">
                        <h1 className="text-center font-bold text-4xl border-b-2 p-3">Dashboard</h1>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Dashboard;