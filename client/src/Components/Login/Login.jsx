import React, { useEffect, useState } from 'react';
import '../../App.css'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo_b_2.avif'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const Login = () => {
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');


    const loginUser = (e) => {
        e.preventDefault();
        Axios.post(URL+'/login', {
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response) => {
            console.log();
            if (response.data.message || loginUserName == '' || loginPassword ==  '') {
                navigateTo('/')
                setLoginStatus(`Credenciales incorrectas!!`)
            }
            else {
                if(loginUserName == 'admin'){
                    navigateTo('/dashboard')
                }else{
                    navigateTo('/listCompras')
                }
                
            }
        })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage')
            setTimeout(() => {
                setStatusHolder('message')
            }, 5000);
        }
    }, [loginStatus])

    const onSubmit = () => {
        setLoginUserName('')
        setLoginPassword('')
    }

    return (
        <div className="loginPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Ciencia para vivir mejor</h2>
                        <p>Biolven Laboratories</p>
                    </div>

                    {/* Boton de crear una cuenta
                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}>
                            <button className="btn">Sign Up</button>
                        </Link>
                    </div>
                    */}
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        {/* <h3>Ingresar</h3> */}
                    </div>

                    <form action="" className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuario</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='username' placeholder='Ingrese su usuario'
                                    onChange={(event) => setLoginUserName(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Contraseña</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='password' placeholder='Ingrese su contraseña'
                                    onChange={(event) => setLoginPassword(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Ingresar</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        {/* Boton de olvidar contraseña 
                        <span className="forgotPassword">
                            Forgot your password? <a href="">Click Here</a>
                        </span>
                        */}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login