import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAsync } from '../redux/action/actionLogin'

const Nav = ({ setCheck }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutAsync())
    }
    const { ingredients } = useSelector(store => store.ingredients)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className='border-b-solid border-b-2 border-b-blue-700 w-2/6 px-5 border-x-solid border-x-2 border-x-black mt-10 border-t-solid border-t-2 border-t-black'>
                <div className='my-10'>
                    <h2 className='text-sm'>INGREDIENTES</h2>
                    {
                        ingredients.map((ingredients) => (
                            ingredients.map((i, index) => (
                                <div key={index}>
                                    <h1 className="font-bold text-3xl">{i.name}</h1>
                                </div>
                            ))
                        ))
                    }
                </div>
                <div className='flex flex-row justify-between items-start text-sm text-blue-700 mt-5 mb-2'>
                    <div>
                        <button onClick={() => setCheck(true)} className="pr-2 border-r-solid border-r-2 border-r-blue-700">Seleccionar todo</button>
                        <button onClick={() => setCheck(false)} className="px-2 ">Deseleccionar todo</button>
                    </div>
                    <button onClick={() => handleLogout()} className="px-2">Cerrar Sesión</button>
                </div>
            </div>
        </div>

    )
}

export default Nav