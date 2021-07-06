import React from 'react'
import PropTypes from 'prop-types'
import playIcon from '../assets/icons/play-icon.png'
import plusIcon from '../assets/icons/plus-icon.png'
import '../scss/CarouselItem.scss'


const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img src={cover} alt={title} className="carousel-item__img" />
        <div className="carousel-item__details">
        <div>
            <img src={playIcon} alt="" className="carousel-item__details--img" />
            <img src={plusIcon} alt="" className="carousel-item__details--img" />
        </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} `}</p>
        </div>
    </div>
)

CarouselItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string,
}

export default CarouselItem