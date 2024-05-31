import React, { useEffect, useState } from 'react'
import '../../../App.css'
import SideBarAS from '../SideBar_as/SideBarAS'
import Axios from 'axios'

const usuario = 'luis';

const List_compras = () => {
    const [compras_list, setComprasList] = useState([])
    const [sumPunt, setSum] = useState(0)
    const [dataAs, setAs] = useState([])
    const [idInserted, setIdInserted] = useState(0)
    let puntosTotales = 0;

    const get_compras = () => {
        Axios.get('http://localhost:3002/compras/'+usuario).then((response) => {
            setComprasList(response.data);
        })
    }

    const getAsociado = (id_asociado) => {
        Axios.get('http://localhost:3002/asociado/' + id_asociado).then((response) => {
            setAs(response.data)
        })
    }

    const crear_solicitud = ()=>{
        let usuario = 'luis'
        Axios.post('http://localhost:3002/crear_solicitud/'+usuario,{
            Usuario: usuario,
            Puntos: sumPunt
        }
        ).then((response) => {
            alert("Solicitud de "+ usuario + " agregada con exito");
            let id_ins = response.data.id_inserted
            console.log(id_ins)

            compras_list.map((val, key) => {
                Axios.put('http://localhost:3002/compras/'+val.id_compra,{
                    id_solicitud: id_ins
                }
                ).then((res) => {
                    alert("Compras asignadas correctamente!!");
                })
            })

        })

    }


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
                                <h1>Compras echas con tu codigo</h1>
                            </div>

                            <div className="secContainer grid">
                                {
                                    compras_list.map((val, key) => {
                                        puntosTotales += (val.monto_compra*dataAs.factor)/100;
                                        return <div className="singleCustomer flex">
                                            <div className="customerDetails">
                                                <span className="name">Id compra</span>
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
                                                <small>{(val.monto_compra*dataAs.factor)/100}</small>
                                            </div>

                                            <div className="customerDetails">
                                                <span className="name">Estado de compra</span>
                                                <small>{val.id_solicitud == null ? 'En espera de canje' : 'Canjeada en la solicitud '+val.id_solicitud}</small>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default List_compras
