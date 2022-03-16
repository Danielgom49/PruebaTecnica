import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAsync } from '../redux/action/actionIngredients'

const Articles = ({ check, setPrice }) => {

    const dispatch = useDispatch()
    let numItems = 0
    let obj = {}
    const [items, setItems] = useState(numItems)
    useEffect(() => {
        dispatch(listAsync())
    }, [dispatch])
    const { ingredients } = useSelector(store => store.ingredients)

    const handleCheckbox = (e) => {
        const price = Number(e.target.value)
        if (e.target.checked) {
            setItems(items + 1)
            obj = {
                items: items + 1,
                subtotal: price,
                envio: 7.00,
                total: price + 7.00
            }
        } else {
            setItems(items - 1)
            obj = {
                items: items - 1,
                subtotal: price,
                envio: 7.00,
                total: price + 7.00
            }
        }
        setPrice(obj)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="snap-y w-2/6 border-b-2 border-b-solid border-b-black ">
                {
                    ingredients.map((ingredients) => (
                        ingredients.map((i) => (
                            i.ingredients.map((list, index) => (
                                <div key={index} className='snap-start flex flex-row items-center justify-between py-3 px-2 border-x-solid border-x-2 border-x-black'>
                                    <div className="flex fle-row justify-around items-center ">
                                        <div className="flex flex-row justify-center items-center">
                                            <div>
                                                {!check ?
                                                    <input type='checkbox' onChange={handleCheckbox} value={list.price} />
                                                    :
                                                    <input type='checkbox' onChange={handleCheckbox} value={list.price} checked={check} />
                                                }
                                            </div>
                                            <div className="border-2 border-solid border-black rounded px-4 py-2 ml-3">
                                                <h1 className="text-3xl text-blue-700">{list.items}</h1>
                                            </div>
                                        </div>
                                        <div className='mx-3 flex-col justify-center items-center'>
                                            <h1 className="font-bold text-base">{list.product}</h1>
                                            <p className='text-xs text-gray-500'>{list.brand}</p>
                                            <p className='text-xs'>{list.quantity}</p>
                                        </div>
                                    </div>
                                    <div className=' flex-col justify-center items-center'>
                                        <h1 className='text-green-700'>{list.price} €</h1>
                                    </div>
                                </div>
                            ))
                        ))
                    ))
                }
            </div>

        </div>
    )
}

export default Articles