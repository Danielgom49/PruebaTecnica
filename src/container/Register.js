import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { registerAsync } from '../redux/action/actionRegister'
import { LoginBg } from '../styles/styledComponent'

const Register = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        pass1: '',
        pass2: ''
    })
    const { name, email, pass1, pass2 } = values

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAsync(email, pass1, name))
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center my-10">
                <LoginBg>
                    <div>
                        <h1 className="font-bold text-2xl py-3 ml-10">Crea tú cuenta</h1>
                    </div>
                    <form onSubmit={handleRegister} className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Nombre</label>
                            <input type="name" name="name" value={name} onChange={handleInputChange} className=" rounded py-2 px-2" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Correo</label>
                            <input type="email" name="email" value={email} onChange={handleInputChange} className=" rounded py-2 px-2" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Contraseña</label>
                            <input type="password" name="pass1" value={pass1} onChange={handleInputChange} className=" rounded py-2 px-2" placeholder="Al menos 6 carácteres" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Repite la contraseña</label>
                            <input type="password" name="pass2" value={pass2} onChange={handleInputChange} className=" rounded py-2 px-2" />
                        </div>
                        <button>Registrarse</button>
                        <div className="flex flex-row">
                            <p className="mx-3">¿Quieres iniciar sesión?</p>
                            <Link className="text-blue-600 mb-3" to='/login'>Iniciar Sesión</Link>
                        </div>
                    </form>
                </LoginBg >
            </div >
        </div>
    )
}

export default Register