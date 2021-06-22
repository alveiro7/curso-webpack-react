import React from 'react'
import '../scss/Header.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/icons/user-icon.png'

const Header = () => (
    <header className='header'>
        <img className='header__img' src={logo} alt='logo platzi video'/>
        <div>
            <figure className="header__profile">
                <img src={userIcon} alt="icono del perfil" />
            <figcaption>Perfil</figcaption>
            </figure>
            <nav className= 'header__menu'>
                <ul>
                    <li><a href="">cuenta</a></li>
                    <li><a href="">cerrar sesión</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
