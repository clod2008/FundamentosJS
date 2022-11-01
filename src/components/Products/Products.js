import React, { useContext } from 'react'
import { productos } from '../../data/productos'
import { CartContext } from '../context/CartContex'


export const Product = () => {

  const { addItemToCart, } = useContext(CartContext)

  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5'>
        {/* inicio del .map */}
          {productos.map((product, i) => (
            <div key={i} className='col'>
              <div className='card'>
                <img src={product.img} alt={product.name} />
                <div>
                    <p>
                      {product.title} - ${product.price}
                    </p>
                </div>
                {/* Envía toda la info del produto elegido */}
                <button className='btn btn-primary' onClick={()=> addItemToCart(product)}>Comprar</button>
              </div>  
            </div>
          ))}
        {/* fin del .mpa */}
      </div>
    </div>
  )
}
