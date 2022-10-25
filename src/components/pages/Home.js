import React from 'react'
import { productos } from '../../data/productos'
import { CardGrid } from '../CardGrid/CardGrid'
// import { FtechApi } from '../FethApi/FtechApi'
import { HeroBanner } from '../HeroBanner/HeroBanner'

export const Home = () => {
  return (
    <>
          <HeroBanner />

          {/* <FtechApi /> */}

          <CardGrid data={productos} />
    </>
  )
}
