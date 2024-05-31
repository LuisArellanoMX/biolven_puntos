import React, { useEffect, useState } from 'react'
import '../../../App.css'
import './DetailAsociado.css'
import Sidebar from '../../Dashboard/SideBarSection/Sidebar'
import user from '../../../Assets/aldi.jpg'
import Activity from '../../Dashboard/BodySection/ActivitySection/Activity'
import Axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { MdConfirmationNumber, MdMarkEmailRead } from 'react-icons/md'
import { FaPiggyBank, FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { CiPercent } from 'react-icons/ci'

const DetailAsociado = () => {
    const [dataAs, setAs] = useState([])
    const { id_asociado } = useParams();

    let params = useParams();
    console.log(params, id_asociado);

    const getAsociado = (id_asociado) => {
        Axios.get('http://localhost:3002/asociado/' + id_asociado).then((response) => {
            setAs(response.data)
        })
    }
    

    useEffect(() => {
        getAsociado(id_asociado);
    }, [])

    console.log(dataAs);

    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar />
                <div className='mainContent'>
                    <div className="container flex">


                        <div className="activitySection flex">
                            <div className="heading">
                                <h1>Asociado {dataAs.username}</h1>
                            </div>

                            <div className="secContainer grid flex">
                                <div className="singleCustomer flex">
                                    <FaUserShield className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Nombre de usuario</span>
                                        <label>{dataAs.username}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <MdConfirmationNumber className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Codigo promocional</span>
                                        <label>{dataAs.code}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <MdMarkEmailRead className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Correo electronico</span>
                                        <label>{dataAs.email}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <FaPiggyBank className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Datos bancarios</span>
                                        <label>{dataAs.datos_bancarios}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <CiPercent className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Factor conversor</span>
                                        <label>{dataAs.factor}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <BsFillShieldLockFill className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Password</span>
                                        <label>*****************</label>
                                    </div>
                                </div>

                                <div className="btn-group flex">
                                    <NavLink to={"/addAsociado/" + dataAs.id} className="btn" cl>
                                        Editar
                                    </NavLink>
                               
                                    <NavLink to={"/addAsociado/" + dataAs.id} className="btn" cl>
                                        Eliminar
                                    </NavLink>
                               
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailAsociado