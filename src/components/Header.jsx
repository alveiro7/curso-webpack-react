import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import '../scss/Header.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/icons/user-icon.png'


const Header = props => {
    const {user} = props
    const handUser = Object.keys(user).length > 0
    return(
        <header className='header'>
                <Link to="/">
                    <img className='header__img' src={logo} alt='logo platzi video'/>
                </Link>
            <div>
                <figure className="header__profile">
                    {handUser ?
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img src={userIcon} alt="icono del perfil" />
                    }
                    <figcaption>Perfil</figcaption>
                </figure>
                <nav className= 'header__menu'>
                    <ul>
                        <li><Link to="/login">cuenta</Link></li>
                        <li><a href="">cerrar sesión</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, null)(Header)
