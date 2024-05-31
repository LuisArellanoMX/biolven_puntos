import React, { useEffect, useState } from 'react'
import '../../../App.css'
import './asociados.css'
import Sidebar from '../../Dashboard/SideBarSection/Sidebar'
import user from '../../../Assets/aldi.jpg'
import Activity from '../../Dashboard/BodySection/ActivitySection/Activity'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

const ListAsociado = () => {
    const [asList, setAs] = useState([])
    

    const getAsociados = () => {
        Axios.get('http://localhost:3002/asociado').then((response) => {
            setAs(response.data)
        })
    }

    useEffect(() => {
        getAsociados()
    }, [])


    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar />
                <div className='mainContent'>
                    <div className="bottom flex">

                        <div className="activitySection">
                            <div className="heading flex">
                                <h1>Asociados</h1>
                            </div>

                            <div className="secContainer grid">

                                {/* Lista de Influencers */}

                                {
                                    asList.map((val, key) => {
                                        if (val.username != "admin") {
                                            return <div className="singleCustomer flex">
                                                <img src={user} alt="Imagen de perfil" />
                                                <div className="customerDetails">
                                                    <span className="name">{val.username}</span>
                                                    <small>Codigo: {val.code}</small>
                                                </div>
                                                    <NavLink to={"/asociados/"+val.id} className="menuLink flex btn flex" cl>
                                                            Detalles
                                                    </NavLink>
                                            </div>
                                        }
                                    })
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAsociado