import React, { useEffect, useState } from 'react'
import './body.css'
import Top from './TopSection/Top'
import Listing from './ListingSection/Listing'
import Activity from './ActivitySection/Activity'
import Solicitudes from '../Solicitudes/Solicitudes'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

const Body = () => {

  const [solicitudes_list, setsolicitudesList] = useState([])
  const [sumPunt, setSum] = useState(0)

  const get_solicitudes = () => {
    Axios.get('http://localhost:3002/solicitud/admin').then((response) => {
      setsolicitudesList(response.data);
    })

  }

  useEffect(() => {
    get_solicitudes()
  }, [])
  return (
    <div className='mainContent'>
      <Top />
      <div className="activitySection">
        <div style={{ marginLeft: '-20px' }} className="heading flex">
          <h1>Solicitudes tramitadas</h1>
        </div>

        <div className="secContainer grid">
          {
            solicitudes_list.map((val, key) => {
              if (val.estado_solicitud == 1) {
                return;
              }
              return <div className="singleCustomer flex">
                <div className="customerDetails">
                  <span className="name">Id solicitud</span>
                  <small>{val.id_solicitud}</small>
                </div>

                <div className="customerDetails">
                  <span className="name">Usuario</span>
                  <small>{val.usuario}</small>
                </div>

                <div className="customerDetails">
                  <span className="name">Fecha</span>
                  <small>{new Date(val.fecha_solicitud).toISOString().split('T')[0]}</small>
                </div>

                <div className="customerDetails">
                  <span className="name">Puntos</span>
                  <small>{val.puntos_solicitud}</small>
                </div>

                <div className="customerDetails">
                  <span className="name">Estado</span>
                  <small>{val.estado_solicitud == 0 ? 'Pendiente' : 'Aprobada'}</small>
                </div>

                <div className="customerDetails">

                  <NavLink to={"/detalles_solicitud/" + val.id_solicitud} className="btn" cl>
                    Contestar
                  </NavLink>
                </div>

              </div>

            })
          }
        </div>


      
        
      </div>
      <Listing />
    </div>
  )
}

export default Body