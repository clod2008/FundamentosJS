import React from 'react'
import { BtnMain } from '../BtnMain'

// Este componente recibe los datos dentro de la propiedad {data} la cual es enviada desde Home.js
export const CardGrid = ({data}) => {

  return (
    <>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
              {data.map(({ id, title, text, img}) => (
                <div className='col'key={id}>
                    <div className='card'>
                        <img src={img} className='card-img-top' alt={title}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'>{text}</p>
                        </div>
                        <div className='card-footer'>
                            <BtnMain btnTxt={title} url={'#'} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <hr/>
    </>
    )
}
