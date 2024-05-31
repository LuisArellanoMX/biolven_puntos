import React, { useEffect, useState } from 'react'
import '../../../App.css'

import Axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { MdConfirmationNumber, MdMarkEmailRead, MdNumbers } from 'react-icons/md'
import { FaComment, FaComments, FaPiggyBank, FaUserShield } from 'react-icons/fa'
import { BsFillQuestionCircleFill, BsFillShieldLockFill } from 'react-icons/bs'
import SideBarAS from '../SideBar_as/SideBarAS'
import { GrScorecard } from "react-icons/gr";
import { GrStatusUnknown } from "react-icons/gr";

const DetailSolicitudAs = () => {
    const [dataAs, setAs] = useState([])
    const { id_solicitud } = useParams();

    const getSolicitud = (id_solicitud) => {
        Axios.get('http://localhost:3002/solicitud_detalle/' + id_solicitud).then((response) => {
            setAs(response.data[0])
        })
    }

    useEffect(() => {
        getSolicitud(id_solicitud);
    }, [])

    console.log(dataAs);

    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <SideBarAS />
                <div className='mainContent'>
                    <div className="container flex">


                        <div className="activitySection flex">
                            <div className="heading">
                                <h1>Solicitud no. {dataAs.id_solicitud}</h1>
                            </div>

                            <div className="secContainer grid flex">
                                <div className="singleCustomer flex">
                                    <FaUserShield className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Nombre de usuario</span>
                                        <label>{dataAs.usuario}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <MdConfirmationNumber className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Fecha</span>
                                        <label>{dataAs.fecha_solicitud}</label>
                                        
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <MdNumbers className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Puntos</span>
                                        <label>{dataAs.puntos_solicitud}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <BsFillQuestionCircleFill className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Estado</span>
                                        <label>{dataAs.estado_solicitud == 0 ? 'Pendiente' : 'Aprobada'}</label>
                                    </div> 
                                </div>

                                <div className="singleCustomer flex">
                                    <FaComments className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Comentario respuesta</span>
                                        <label>{dataAs.estado_solicitud == 0 ? 'Pendiente de responder' : dataAs.comentario_respuesta}</label>
                                    </div> 
                                </div>

                                <div className="singleCustomer flex">
                                    <div className="customerDetails">
                                        <span className="name">Imagen de deposito</span>
                                    </div>
                                </div>

                                <img src={'http://localhost:3002/uploads/'+dataAs.imagen} alt="" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default DetailSolicitudAs