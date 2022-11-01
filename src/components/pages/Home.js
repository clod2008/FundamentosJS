import React from 'react'
import { productos } from '../../data/productos' // Estos son los datos que van a ser enviados dentro de data
import { CardGrid } from '../CardGrid/CardGrid'
// import { FtechApi } from '../FethApi/FtechApi'
import { HeroBanner } from '../HeroBanner/HeroBanner'
import { Product } from '../Products/Products' // Componente que muestra los productos para comprar

export const Home = () => {
  return (
    <>
          <HeroBanner />

          {/* <FtechApi /> */}

          {/* <CardGrid data={productos} />  */}

          <Product />
    </>
  )
}
