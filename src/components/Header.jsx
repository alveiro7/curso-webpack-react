import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import '../scss/Header.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/icons/user-icon.png'


const Header = props => {
    const {user} = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

    return(
        <header className='header'>
                <Link to="/">
                    <img className='header__img' src={logo} alt='logo platzi video'/>
                </Link>
            <div>
                <figure className="header__profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img src={userIcon} alt="icono del perfil" />
                    }
                    <figcaption>Perfil</figcaption>
                </figure>
                <nav className= 'header__menu'>
                    <ul>
                        {hasUser ?
                            <li><a href="/">{user.name}</a></li>
                            :
                            null
                        }
                        {hasUser ?
                            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
                            :
                            <li><Link to="/login">Iniciar Sesión</Link></li>
                        }
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

const mapDispatchToProps = {
    logoutRequest
}

export default connect (mapStateToProps, mapDispatchToProps)(Header)
