import React, { useState } from 'react'
import { getCoints } from '../helpers/getCoints'
import { cointGeckoAPI } from '../../data/endPoints'


export const FtechApi = () => {

    const [cointList, setCointList] = useState([])
    
    try {
        const coints = getCoints(cointGeckoAPI)
        coints.then( newCoints => setCointList(newCoints) )

    } catch (error) {
        console.log(error) 
    }

    return (
        <div className='container mt-5'>
            <ul>
                {cointList.map(({id, name, image, price}) =>(
                    <li key={id}>
                        <div className='row mt-1 mb-1'>
                            <div className='col-1'>
                                <img
                                    className='img-fluid'
                                    alt={id}
                                    src={image}
                                />
                            </div>
                            <div
                                className='col-4'
                            >
                                {name}
                            </div>
                            <div className='col-3'>
                                {price}
                            </div>
                            
                        </div>
                    </li>
                )) }
            </ul>
        </div>
    )
}
