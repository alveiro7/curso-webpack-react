import React from 'react'
import '../scss/Player.scss'

const Player = () => {
    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button">
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default Player