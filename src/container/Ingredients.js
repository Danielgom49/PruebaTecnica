import React, { useState } from 'react'
import Articles from '../components/Articles'
import Nav from '../components/Nav'
import Prices from '../components/Prices'

const Ingredients = () => {
    const [check, setCheck] = useState(false)
    const [price, setPrice] = useState({
        items: 0,
        subtotal: 0,
        envio: 7.00,
        total: 0 + 7.00
    })

    return (
        <div>
            <Nav setCheck={setCheck} />
            <Articles check={check} setPrice={setPrice} />
            <Prices price={price} />
        </div>
    )
}

export default Ingredients