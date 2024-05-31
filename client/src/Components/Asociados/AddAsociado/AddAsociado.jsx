import React, { useEffect, useState} from 'react'
import './AddAsociado.css';
import add_as from '../../../Assets/add_as.png'
import { FaPiggyBank, FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { CiPercent } from "react-icons/ci";
import { MdMarkEmailRead, MdConfirmationNumber  } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../Dashboard/SideBarSection/Sidebar'
import Axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// Configuración de SweetAlert2 con React
const MySwal = withReactContent(Swal);

function AddAsociado(props) {
    let [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [datosBan, setDatosBan] = useState('')
    const [factor, setFactor] = useState('')
    const navigateTo = useNavigate();
    const [dataAs, setAs] = useState([]);

    let encabezado = "Registrar asociado"
    let txt_btn = "Registrar"

    const getAsociado = (id_asociado) => {
        Axios.get('http://localhost:3002/asociado/' + id_asociado).then((response) => {
            setAs(response.data)
            setEmail(response.data.email)
            setUserName(response.data.username);
            setPassword(response.data.password);
            setCode(response.data.code);
            setDatosBan(response.data.datos_bancarios);
            setFactor(response.data.factor);
        })
    }

    const { id_asociado } = useParams();

    if(id_asociado != undefined){
        useEffect(()=>{
            getAsociado(id_asociado);
        },[])
        encabezado = "Actualizar asociado";
        txt_btn = "Actualizar";
    }
   

    const createUpdateAsociado = (e) =>{
        e.preventDefault()
        if(id_asociado == undefined){
            Axios.post('http://localhost:3002/asociado', {
                Email: email,
                UserName: userName,
                Password: password,
                Code: code,
                DatosBan: datosBan,
                Factor: factor
            }).then(() => {
                //alert("Asociado "+ userName + " agregado con exito");
                MySwal.fire({
                    title: '¡Registrado!',
                    text: "Asociado "+ userName + " agregado con exito",
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                setEmail('');
                setUserName('');
                setPassword('');
                setCode('');
                setDatosBan('');
                setFactor('');
            })
        }else{
            Axios.put('http://localhost:3002/asociado/'+id_asociado, {
            id: id_asociado,
            Email: email,
            UserName: userName,
            Password: password,
            Code: code,
            DatosBan: datosBan,
            Factor: factor
        }).then(() => {
            //alert("Asociado "+ userName + " actualizado con exito");
            MySwal.fire({
                title: '¡Actualizado!',
                text: "Asociado "+ userName + " actualizado con exito",
                icon: 'success',
                confirmButtonText: 'OK'
              });
            setEmail('');
            setUserName('');
            setPassword('');
            setCode('');
            setDatosBan('');
            setFactor('');
        })
        }
        
    }

    return (
        <div className="dashboard flex"> 
            <div className="dashboardContainer flex">
                <Sidebar />
                <div className='mainContent'>
                    <div className="container flex">

                        <div className="formDiv flex">
                            <div className="headerDiv">
                                <img src={add_as} alt="Logo Image" />
                                <h3>{encabezado}</h3>
                            </div>

                            <form action="" className="form grid">

                                <div className="inputDiv">
                                    <label htmlFor="email">Correo electronico</label>
                                    <div className="input flex">
                                        <MdMarkEmailRead className="icon" />
                                        <input type="email" id='email' placeholder='Ingrese el correo' value={email}
                                            onChange={(event) => setEmail(event.target.value)} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="username">Usuario</label>
                                    <div className="input flex">
                                        <FaUserShield className="icon" />
                                        <input type="text" id='username' placeholder='Ingrese el usuario' value={userName}
                                            onChange={(event) => setUserName(event.target.value)} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Contraseña</label>
                                    <div className="input flex">
                                        <BsFillShieldLockFill className="icon" />
                                        <input type="password" id='password' placeholder='Ingrese la contraseña' value={password}
                                            onChange={(event) => setPassword(event.target.value)} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Codigo promocional</label>
                                    <div className="input flex">
                                        <MdConfirmationNumber  className="icon" />
                                        <input type="text" id='code' placeholder='Ingrese el codigo' value={code}
                                            onChange={(event) => setCode(event.target.value)} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Datos bancarios</label>
                                    <div className="input flex">
                                        <FaPiggyBank   className="icon" />
                                        <input type="text" id='code' placeholder='Ingrese los datos bancarios' value={datosBan}
                                            onChange={(event) => setDatosBan(event.target.value)} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Factor conversor</label>
                                    <div className="input flex">
                                        <CiPercent className="icon" />
                                        <input type="number" id='code' placeholder='Representa el porcentaje' value={factor}
                                            onChange={(event) => setFactor(event.target.value)} />
                                    </div>
                                </div>

        
                                    <button type='submit' className='btn flex' onClick={createUpdateAsociado}>
                                    <span>{txt_btn}</span>
                                    <AiOutlineSwapRight className="icon" />
                                    </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddAsociado
