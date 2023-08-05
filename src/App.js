import React from 'react';
import MusicList from './components/MusicList';
import Nav from './components/Nav';
import { MusicProvider } from './contexts/MusicContext';
import { UserProvider } from './contexts/UserContext';

function App() {

  return (
    <div>
      <UserProvider>
        <MusicProvider>
          <Nav />
          <MusicList />
        </MusicProvider>
      </UserProvider>
    
      
    </div>
  );
}

export default App;
