import React from 'react'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import { Button } from '../styles/styledComponent'

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: flex-start;

`
const Buy = ({ state, setState, price, children }) => {

    return (
        <>
            {state &&
                <Modal>
                    <div className="p-10 bg-white mt-5 rounded-lg w-2/5">
                        <div className="flex justify-end ">
                            <button onClick={() => setState(false)} className="bg-black p-1 rounded-full text-white" ><IoMdClose /></button>
                        </div>
                        <h1 className="font-bold text-xl my-3">Tu compra fue exitosa</h1>
                        <div className="my-3">
                            <p>Subtotal: {price.subtotal} €</p>
                            <p>Gastos de Envío:  {price.envio} €</p>
                            <p>Total: {price.total} €</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Button onClick={() => setState(false)} className=" my-3 py-2 text-white">Aceptar</Button>
                        </div>
                        {children}
                    </div>
                </Modal>
            }
        </>
    )
}

export default Buy