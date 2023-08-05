import React, { createContext } from 'react';
import initialMusic from '../consts/initialMusic';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {

    const data = { music: initialMusic }

    return (
        <MusicContext.Provider value={data}>
            { children }
        </MusicContext.Provider>
    )
}

export { MusicProvider }
export default MusicContext;