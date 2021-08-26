import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import '../scss/Register.scss'

const Register = props => {

	const [form, SetValues]  = useState({
		email: '',
		name: '',
		password: ''
	})

	const handleInput = event => {
		SetValues({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		console.log(form)
		props.registerRequest(form)
		props.history.push('/')
	}

	return (
		<section className='register'>
			<section className='register__container'>
				<h2>Regístrate</h2>
				<form className='register__container--form' onSubmit={handleSubmit}>
					<input
						name='name'
						className='input'
						type='text'
						placeholder='Nombre'
						onChange={handleInput}
					/>
					<input
						name='email'
						className='input'
						type='text'
						placeholder='Correo'
						onChange={handleInput}
					/>
					<input
						name='password'
						className='input'
						type='password'
						placeholder='Contraseña'
						onChange={handleInput}
					/>
					<button type='submit' className="button">Registrarme</button>
				</form>
				<p className="">
					Ya tienes una cuenta.
					<Link to='/login'>Iniciar sesión</Link>
				</p>
			</section>
		</section>
	)
}

const mapDispatchToProps = {
	registerRequest
}

// conectar el componente con el store
export default connect (null, mapDispatchToProps) (Register)