import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import img from '../../../../Assets/gilbert.jpg'
import img2 from '../../../../Assets/grafica_ejemplo_1.png'
import baner from '../../../../Assets/baner_1.png'
import video from '../../../../Assets/video.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Panel de administracion</h1>
          <p>Biolven Laboratories</p>
        </div>

        {/* Bar for implement search
        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div>
        */}


        <div className="adminDiv flex">
          {/* Icon of notifications
            <TbMessageCircle className="icon" />
          */}
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>

        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Ciencia para vivir mejor</h1>
          <p>Biolven Laboratories</p> 
          
          
          {/* <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div> */}
        

          <div className="videoDiv">
             <video src={video} autoPlay loop muted></video> 
            {/* <img src={baner} alt="Admin Image" /> */}
          </div>
        </div>

          {/* Posiblemente graficas */}
        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>Estadisticas</h1>

              <div className="flex">
                <span>
                  Hoy <br /> <small>5 pedidos</small>
                </span>
                <span>
                  Este mes <br /> <small>175 pedidos</small>
                </span>
              </div>

              <span className="flex link">
                Ver pedidos <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Imagen de grafica" />
            </div>

            {/* Card con un bonito layaut 
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
        </div>

      </div>
    </div>
  )
}

export default Top