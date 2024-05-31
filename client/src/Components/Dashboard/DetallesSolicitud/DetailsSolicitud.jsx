import React, { useEffect, useState } from 'react'
import '../../../App.css'

import Axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { MdConfirmationNumber, MdMarkEmailRead, MdNumbers } from 'react-icons/md'
import { FaPiggyBank, FaUserShield } from 'react-icons/fa'
import { BsFillQuestionCircleFill, BsFillShieldLockFill } from 'react-icons/bs'
import Sidebar from '../SideBarSection/Sidebar'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// Configuración de SweetAlert2 con React
const MySwal = withReactContent(Swal);

const DetailSolicitud = () => {
    const [dataAs, setAs] = useState([])
    const [coment, setComent] = useState([])
    const { id_solicitud } = useParams();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('comentario', coment);
        formData.append('id_solicitud', id_solicitud);

        try {
            const response = await Axios.post('http://localhost:3002/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully', response.data);
            MySwal.fire({
                title: '¡Contestado!',
                text: "Solicitud contestada con exito",
                icon: 'success',
                confirmButtonText: 'OK'
              });

        } catch (error) {
            console.error('Error uploading file', error);
        }
    };


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
                <Sidebar />
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
                                    <FaPiggyBank className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Datos bancarios</span>
                                        <label>{dataAs.datos_bancarios}</label>
                                    </div>
                                </div>

                                <div className="singleCustomer flex">
                                    <BsFillQuestionCircleFill className="icon" />
                                    <div className="customerDetails">
                                        <span className="name">Estado</span>
                                        <label>{dataAs.estado_solicitud == 0 ? 'Pendiente' : 'Aprobada'}</label>
                                    </div>
                                </div>

                                <div className="formDiv flex">

                                <form style={{marginLeft:'-100px'}} action="" className="form grid">
                                <div className="inputDiv">
                                    <label htmlFor="file">Foto de evidencia</label>
                                    <div className="input flex">
                                        <input type="file" id='file' onChange={handleFileChange} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Comentario</label>
                                    <div className="input flex">
                                        <input type="text" id='code' placeholder='Ingrese un comentario de respuesta' value={coment}
                                            onChange={(event) => setComent(event.target.value)} />
                                    </div>
                                </div>
                                </form>
                                </div>
                                <div className="btn-group flex">
                                    <button className="btn" onClick={handleSubmit}>
                                        Contestar
                                    </button>

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

export default DetailSolicitud