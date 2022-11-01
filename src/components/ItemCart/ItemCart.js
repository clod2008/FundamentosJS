import React, { useContext } from 'react'
import { CartContext } from '../context/CartContex'
import './ItemCart.css'

export const ItemCart = ({ item }) => {
    const { title, amount, id, img, price} = item
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)
    return (

        <div className='cartItem'>
            <p>
                {title} 
            </p>
            <img src={img} alt="" />
            <div>
                {amount}
                <p>Total: $ {amount * price } </p>
            </div>
            <hr/>
        </div>
    )
}


