import React, { useEffect, useState } from 'react'
import '../../../App.css'
import SideBarAS from '../SideBar_as/SideBarAS'
import Axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// Configuración de SweetAlert2 con React
const MySwal = withReactContent(Swal);

const Canjes = () => {
    const [compras_list, setComprasList] = useState([])
    const [sumPunt, setSum] = useState(0)
    const [dataAs, setAs] = useState([])
    const [idInserted, setIdInserted] = useState(0)
    let puntosTotales = 0;
    const usuario = 'luis'

    const get_compras = () => {
        Axios.get('http://localhost:3002/compras_canje/' + usuario).then((response) => {
            setComprasList(response.data);
        })
    }

    const getAsociado = (id_asociado) => {
        Axios.get('http://localhost:3002/asociado/' + id_asociado).then((response) => {
            setAs(response.data)
        })
    }

    const crear_solicitud = () => {

        if (puntosTotales == 0) {
            MySwal.fire({
                title: 'Error!',
                text: "No tiene puntos ahorita para canjear",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            let usuario = 'luis'
            Axios.post('http://localhost:3002/crear_solicitud/' + usuario, {
                Usuario: usuario,
                Puntos: puntosTotales
            }
            ).then((response) => {
                //alert("Solicitud de " + usuario + " agregada con exito");
                MySwal.fire({
                    title: '¡Registrada!',
                    text: "Solicitud de " + usuario + " agregada con exito",
                    icon: 'success',
                    confirmButtonText: 'OK'
                  }).then(()=>{
                    window.location.reload();
                  });
                let id_ins = response.data.id_inserted
                console.log(id_ins)

                compras_list.map((val, key) => {
                    Axios.put('http://localhost:3002/compras/' + val.id_compra, {
                        id_solicitud: id_ins
                    }
                    ).then((res) => {
                        //alert("Compras asignadas correctamente!!");
                    })
                })
            })
        }
    }

    const asignar_compras = () => {  }

    useEffect(() => {
        get_compras()
        getAsociado(13)
    }, [])

    console.log(compras_list, sumPunt);
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <SideBarAS />

                <div className='mainContent'>
                    <div className="bottom flex">

                        <div className="activitySection">
                            <div className="heading flex">
                                <h1>Compras posibles para canjear</h1>
                            </div>

                            <div className="secContainer grid">
                                {
                                    compras_list.map((val, key) => {
                                        puntosTotales += (val.monto_compra * dataAs.factor) / 100;
                                        return <div className="singleCustomer flex">
                                            <div className="customerDetails">
                                                <span className="name">Id compras</span>
                                                <small>{val.id_compra}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Fecha</span>
                                                <small>{new Date(val.fecha_compra).toISOString().split('T')[0]}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Monto</span>
                                                <small>${val.monto_compra}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Puntos</span>
                                                <small>{(val.monto_compra * dataAs.factor) / 100}</small>
                                            </div>

                                        </div>

                                    })
                                }

                                <hr />

                                <div className="secContainer grid">
                                    <div className="singleCustomer flex">
                                        <div className='customerDetails'>
                                            <h3 style={{ paddingTop: '10px' }}>Puntos totales {puntosTotales}</h3>
                                        </div>


                                        <div className='customerDetails'>
                                            <button style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                height: '50px',  // Ajusta la altura según tus necesidades
                                                width: '200px',  // Ajusta el ancho según tus necesidades
                                                fontSize: '15px', // Ajusta el tamaño de la fuente según tus necesidades
                                                textAlign: 'center'
                                            }} className="btn flex" onClick={crear_solicitud}>
                                                Solicitar pago
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Canjes
