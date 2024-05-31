import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'
import user from '../../../../Assets/aldi.jpg'
import { Link } from 'react-router-dom'
import user1 from '../../../../Assets/dadang.jpg'
import user2 from '../../../../Assets/gilbert.jpg'
import user3 from '../../../../Assets/aldi.jpg'
import user4 from '../../../../Assets/dadang.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Solicitudes de pago</h1>
        <Link to={'/asociados'}>
        <button className="btn flex">
          Ver todos
          <BsArrowRightShort className="icon" />
        </button>
        </Link>
      </div>

      <div className="secContainer grid">

        {/* Lista de Influencers */}
        <div className="singleCustomer flex">
          <img src={user} alt="Imagen de perfil" />
          <div className="customerDetails">
            <span className="name">Influencer 1</span>
            <small>Codigo: 1594895</small>
          </div>

          <button className="btn flex">
            Responder
          </button>
          {/* Label de duracion 
          <div className="duration">
            2 min ago
          </div>
          */}
        </div>

        <div className="singleCustomer flex">
          <img src={user} alt="Imagen de perfil" />
          <div className="customerDetails">
            <span className="name">Influencer 2</span>
            <small>Codigo: 1594895</small>
          </div>

          <button className="btn flex">
            Responder
          </button>
          {/* Label de duracion 
          <div className="duration">
            2 min ago
          </div>
          */}
        </div>

        <div className="singleCustomer flex">
          <img src={user} alt="Imagen de perfil" />
          <div className="customerDetails">
            <span className="name">Influencer 3</span> 
            <small>Codigo: 1594895</small>
          </div>

          <button className="btn flex">
            Responder
          </button>
          {/* Label de duracion 
          <div className="duration">
            2 min ago
          </div>
          */}
        </div>

        <div className="singleCustomer flex">
          <img src={user} alt="Imagen de perfil" />
          <div className="customerDetails">
            <span className="name">Influencer 4</span>
            <small>Codigo: 1594895</small>
          </div>

          <button className="btn flex">
            Responder
          </button>
          {/* Label de duracion 
          <div className="duration">
            2 min ago
          </div>
          */}
        </div>

        <div className="singleCustomer flex">
          <img src={user} alt="Imagen de perfil" />
          <div className="customerDetails">
            <span className="name">Influencer 5</span>
            <small>Codigo: 1594895</small>
          </div>

          <button className="btn flex">
            Responder
          </button>
          {/* Label de duracion 
          <div className="duration">
            2 min ago
          </div>
          */}
        </div>

        <div className="singleCustomer flex">
          <img src={user} alt="Imagen de perfil" />
          <div className="customerDetails">
            <span className="name">Influencer 6</span>
            <small>Codigo: 1594895</small>
          </div>

          <button className="btn flex">
            Responder
          </button>
          {/* Label de duracion 
          <div className="duration">
            2 min ago
          </div>
          */}
        </div>
          
      </div>
    </div>
  )
}

export default Activity