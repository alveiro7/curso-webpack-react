import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {setFavorite} from '../actions'
import playIcon from '../assets/icons/play-icon.png'
import plusIcon from '../assets/icons/plus-icon.png'
import '../scss/CarouselItem.scss'


const CarouselItem = ( props ) => {
    const { cover, title, year, contentRating, duration } = props
    const handleSetFavorite = () => {
        props.setFavorite({
            cover, title, year, contentRating, duration
        })
    }
    return (
        <div className="carousel-item">
            <img src={cover} alt={title} className="carousel-item__img" />
            <div className="carousel-item__details">
            <div>
                <img src={playIcon} alt="" className="carousel-item__details--img" />
                <img src={plusIcon} alt="" onClick={handleSetFavorite} className="carousel-item__details--img" />
            </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} `}</p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string,
}

const mapDispatchToProps = {
    setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)