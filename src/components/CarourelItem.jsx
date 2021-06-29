import React from 'react'
import playIcon from '../assets/icons/play-icon.png'
import plusIcon from '../assets/icons/plus-icon.png'
import foto from '../assets/images/Captura.png'
import '../scss/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img src={foto} alt="" className="carousel-item__img" />
        <div className="caoursel-item__details">
            <img src={playIcon} alt="" className="carouse-item__details--img" />
            <img src={plusIcon} alt="" className="carouse-item__details--img" />
        </div>
        <p className="carousel-item__details--title">Mi historia</p>
        <p className="carouse-item__details--subtitle">2021</p>
    </div>
)

export default CarouselItem