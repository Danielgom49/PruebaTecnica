import React from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/action/actionLogin'
import { LoginBg } from '../styles/styledComponent'

const Login = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = values

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
    }

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <div className="flex flex-col justify-center items-center my-10">
            <LoginBg>
                <div>
                    <h1 className="font-bold text-3xl py-5 ml-10">Iniciar Sesión</h1>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                        <label className="font-bold float-left">Correo</label>
                        <input type="email" name="email" value={email} onChange={handleInputChange} className=" rounded py-2 px-2" />
                    </div>
                    <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                        <label className="font-bold float-left">Contraseña</label>
                        <input type="password" name="password" value={password} onChange={handleInputChange} className=" rounded py-2 px-2" />
                    </div>
                    <button>Iniciar sesión</button>
                    <div className="flex flex-row mb-5">
                        <p className="px-3">Crear nueva cuenta</p>
                        <Link className=" text-blue-600" to="/register">Registrarse</Link>
                    </div>
                </form>
                <div className="flex flex-row justify-evenly items-center w-full mb-5">
                    <button onClick={handleGoogle} className="w-2/5  py-2 rounded-lg box-content bg-white flex flex-row justify-center items-center">
                        <AiOutlineGoogle className="text-2xl " />
                        <p className="px-2" >Google</p>
                    </button>
                    <button onClick={handleFacebook} className="w-2/5  py-2 rounded-lg box-content bg-white flex flex-row justify-center items-center">
                        <FaFacebookF className="text-xl " />
                        <p className="px-2" >Facebook</p>
                    </button>
                </div>
            </LoginBg >
        </div>
    )
}

export default Login