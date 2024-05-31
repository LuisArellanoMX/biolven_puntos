import React from 'react'
import './listing.css'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import frasco from '../../../../Assets/frasco.png'
import producto_1 from '../../../../Assets/products/product_1.png'
import producto_2 from '../../../../Assets/products/product_2.png'
import producto_3 from '../../../../Assets/products/product_3.jpg'
import producto_4 from '../../../../Assets/products/product_4.png'


// import img1 from '../../../Assets/images (9).png'
// import img2 from '../../../Assets/images (8).png'
// import img3 from '../../../Assets/images (10).png'
import user1 from '../../../../Assets/aldi.jpg'
import user2 from '../../../../Assets/dadang.jpg'
import user3 from '../../../../Assets/gilbert.jpg'
import user4 from '../../../../Assets/aldi.jpg'

const Listing = () => {
  const redirectToExternalSite = () => {
    window.location.href = 'https://biolven.com';
  };

  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>Productos mas vendidos</h1>
        <button className="btn flex" onClick={redirectToExternalSite}>
          Ver todos <BsArrowRightShort className="icon" />
        </button>
      </div>

      {/* Tarjetas de producto mas vendidos */}
      <div className="secContainer flex" onClick={redirectToExternalSite}>
        <div className="singleItem">
          {/* <AiFillHeart className="icon" /> */}
          <img src={producto_1} alt="Image Name" />
          <h3>Multivitanimico</h3>
        </div>

        <div className="singleItem" onClick={redirectToExternalSite}>
          {/* <AiOutlineHeart className="icon" /> */}
          <img src={producto_2} alt="Image Name" />
          <h3>Pure Colagen</h3>
        </div>

        <div className="singleItem" onClick={redirectToExternalSite}>
          {/* <AiOutlineHeart className="icon" /> */}
          <img src={producto_3} alt="Image Name" />
          <h3>Kit Radiante</h3>
        </div>

        <div className="singleItem" onClick={redirectToExternalSite}>
           <AiFillHeart className="icon" /> 
          <img src={producto_4} alt="Image Name" />
          <h3>Probiotics</h3>
        </div>
      </div>

      {/* Mas tarjetas para poner estadisticas 
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                28,556 Plant sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
      */}

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Acerca de</h3>
          <p>Biolven es un grupo empresarial enfocado en el cuidado personal, en la salud y la vitalidad de las personas a través de productos con altos criterios de calidad.</p>
          <button className="btn" onClick={redirectToExternalSite}>Ir a la tienda en linea</button>

        </div>
      </div>

    </div>
  )
}

export default Listing