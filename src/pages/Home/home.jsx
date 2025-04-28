import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";

function Home(props) {
    const title= 'Dashboard';
    return (
        <div className="home">
            <Sidebar title={title}>
           <Dashboard/>
            </Sidebar>
        </div>
    );
}

export default Home;