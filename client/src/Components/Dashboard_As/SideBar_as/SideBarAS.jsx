import React from 'react'
import './sidebar_as.css'
import logo1 from '../../../Assets/logo_b_2.avif'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp, BiLogOutCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const SideBarAS = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo1} alt="Logo" />
        {/* <h2>Planti.</h2> */}
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          Asociado
        </h3>
        <ul className="menuLists grid">


          <li className="listItem">
            <NavLink to="/canjes" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Posibles canjes
              </span>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink to="/listCompras" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Compras
              </span>
            </NavLink>
          </li>


          <li className="listItem">
            <NavLink to="/solicitudes" className="menuLink flex" cl>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Solicitudes
              </span>
            </NavLink>
          </li>

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
    </div>
  )
}

export default SideBarAS