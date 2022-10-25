import React from 'react';
// import { logo } from '../../assets';
import { LogoSvg, } from '../../assets/svg/logoSvg';
import { navButtos } from '../../data/productos';
import './NavBar.css'

export const NavBar = () => {

    // console.log(navButtos)
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a href="#home">
                    {/* Logo en PNG */}
                    {/* <div className='row h-100'>
                        <img src={logo}
                         alt="Logo" />
                    </div> */}
                    {/* Logo convertido en un Componente dinámico */}
                    <LogoSvg iconWidht='120' />
                </a>
                   
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {navButtos.map(
                            ({ text, link }) => (<li key={text} className='nav-item'>
                                <a className='nav-link' aria-current='page' href={link} target='_blanck'> {text} </a>
                            </li>)
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


