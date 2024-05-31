import React from 'react'
import './sidebar.css'
import logo from '../../../Assets/logo.png'
import logo1 from '../../../Assets/logo_b_2.avif'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp, BiLogOutCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo1} alt="Logo" />
        {/* <h2>Planti.</h2> */}
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          ADMINISTRADOR
        </h3>
        <ul className="menuLists grid">


          <li className="listItem">
            <NavLink to="/dashboard" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink to="/asociados" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Asociados
              </span>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink to="/addAsociado" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Añadir
              </span>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink to="/solicitudesadmin" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Solicitudes
              </span>
            </NavLink>
          </li>

          {/* Lista antigua 
          <li className="listItem">
            <a href="/dashboard" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/registrar" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Registrar
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
          */}

        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          
        </h3>
        <ul className="menuLists grid">



          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BiLogOutCircle className="icon" />
              <span className="smallText">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Card verde 
      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Planti, please contact us from for more questions.</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
      */}
    </div>
  )
}

export default Sidebar