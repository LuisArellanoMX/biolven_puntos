import React, { useEffect, useState } from 'react'
import '../../../App.css'
import SideBarAS from '../SideBar_as/SideBarAS'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

const SolicitudesAs = () => {
    const [solicitudes_list, setsolicitudesList] = useState([])
    const [sumPunt, setSum] = useState(0)

    const get_solicitudes = () => {
        Axios.get('http://localhost:3002/solicitud/luis').then((response) => {
            setsolicitudesList(response.data);
        })

    }

    useEffect(() => {
        get_solicitudes()
    }, [])

    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <SideBarAS />

                <div className='mainContent'>
                    <div className="bottom flex">

                        <div className="activitySection">
                            <div className="heading flex">
                                <h1>Solicitudes tramitadas</h1>
                            </div>

                            <div className="secContainer grid">
                                {
                                    solicitudes_list.map((val, key) => {
                                        return <div className="singleCustomer flex">
                                            <div className="customerDetails">
                                                <span className="name">Id solicitud</span>
                                                <small>{val.id_solicitud}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Fecha</span>
                                                <small>{new Date(val.fecha_solicitud).toISOString().split('T')[0]}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Puntos canjeados</span>
                                                <small>{val.puntos_solicitud}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Estado solicitud</span>
                                                <small>{val.estado_solicitud == 0 ? 'Pendiente' : 'Aprobada'}</small>
                                            </div>

                                            <div className="customerDetails">

                                                <NavLink to={"/detalles_solicitud_as/" + val.id_solicitud} className="btn" cl>
                                                    Detalles
                                                </NavLink>
                                            </div>

                                        </div>

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

export default SolicitudesAs
