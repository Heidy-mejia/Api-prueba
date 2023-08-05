import React, { useContext,Music } from 'react'
import MusicContext from '../contexts/MusicContext'
import MusicContext from './Music'


const MusicList = () => {

    const { music } = useContext(MusicContext);
    console.log(music);
    

    return (
        <div className="container">
            <div className="row">
                {music.map(Music => (
                    <div className="col-md-4" key={Music.id}>
                        <Music 
                            Music={MusicItem}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MusicList

