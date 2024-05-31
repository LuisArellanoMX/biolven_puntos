import React from 'react'
import '../../../App.css'
import Sidebar from '../SideBarSection/Sidebar'
import Activity from '../BodySection/ActivitySection/Activity'


const Asociados = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                <div className='mainContent'>
                    <div className="bottom flex">
                        <Activity/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asociados