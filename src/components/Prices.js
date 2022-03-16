import React, { useState } from 'react'
import Buy from '../modals/Buy'
import { Button } from '../styles/styledComponent'

const Prices = ({ price }) => {

    const [modal, setModal] = useState(false)
    console.log(price);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='w-2/6 px-10 pt-10 border-x-solid border-x-2 border-x-black'>
                <div className='flex flex-row'>
                    <h1 className='text-gray-700 pr-3'>Items:</h1>
                    <p>{price.items}</p>
                </div>
                <div className='flex flex-col justify-center mt-5'>
                    <div className='flex flex-row justify-between items-center my-2'>
                        <h1 className='text-gray-700 pr-3'>Subtotal</h1>
                        <p>{price.subtotal} €</p>
                    </div>
                    <div className='flex flex-row justify-between items-center my-2'>
                        <h1 className='text-gray-700 pr-3'>Gastos de envío</h1>
                        <p>{price.envio}.00 €</p>
                    </div>
                    <div className='flex flex-row justify-between items-center my-2'>
                        <h1 className='pr-3 font-medium'>Total</h1>
                        <p>{price.total} €</p>
                    </div>
                </div>
            </div>
            <div className='w-2/6 flex justify-center items-center border-x-solid border-x-2 border-x-black border-b-2 border-b-solid border-b-black pb-10'>
                <Button onClick={() => setModal(true)} className='py-2 bg-green-700 text-white'>Comprar ingredientes: {price.total} €</Button>
            </div>
            <Buy state={modal} setState={setModal} price={price} />
        </div>
    )
}

export default Prices