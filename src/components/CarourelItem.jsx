import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {setFavorite, deleteFavorite} from '../actions'
import playIcon from '../assets/icons/play-icon.png'
import plusIcon from '../assets/icons/plus-icon.png'
import removeIcon from '../assets/icons/remove-icon.png'
import '../scss/CarouselItem.scss'


const CarouselItem = ( props ) => {
    const { id, cover, title, year, contentRating, duration, isList} = props
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }

    return (
        <div className="carousel-item">
            <img src={cover} alt={title} className="carousel-item__img" />
            <div className="carousel-item__details">
            <div>
                <Link to={`/player/${id}`} >
                    <img
                        src={playIcon}
                        alt="Play Icon"
                        className="carousel-item__details--img"
                    />
                </Link>
                {isList ?
                        <img src={removeIcon}
                            alt="delete"
                            onClick={() => handleDeleteFavorite(id)}
                            className="carousel-item__details--img"
                        /> :
                        <img src={plusIcon}
                            alt="add"
                            onClick={handleSetFavorite}
                            className="carousel-item__details--img"
                        />
                }
            </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} `}</p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    isList: PropTypes.bool,
    setFavorite: PropTypes.func,
    deleteFavorite: PropTypes.func
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem)