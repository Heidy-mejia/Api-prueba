import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const Music = ({ Music }) => {
    const { user, toggleFavoriteMusicToUser } = useContext(UserContext) 

    const imgStyles = {
        height: '260px',
        objectFit: 'cover',
    }
    
    const isFavorite = user?.favoriteMusic?.includes(Music.id);

    return (
        <div className="card">
            <img 
                src={Music.imageUrl}
                alt={Music.title}
                className="card-img-top"
                style={imgStyles}
            />
            <div className="card-body">
                <h4>{Music.title}</h4>
                { user?.id  && 
                    <button className={
                        `btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
                        onClick={() => toggleFavoriteMusicToUser(Music.id)}
                        >
                        Favorito
                    </button>
                }
            </div>
        </div>
    )
}

export default Music
