import React from 'react'
import { imageDemo } from '../../assets' // Manejo de imágenes locales desde /assets/index.js
import './hetoBanner.css'

export const HeroBanner = () => {
  return (

    <div id='HeroBanner'>
      <div className='container'>
          <h1 className='pt-5'>HeroBanner</h1>
          <img 
            alt='imagen'
            src={imageDemo}
          />
          <button>Boton uno</button>
      </div>
    </div>
  )
}
