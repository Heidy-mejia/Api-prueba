import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: 'Heidy', favoriteMusic: [1, 2] };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteMusicToUser = (musicId) => {
    const isFavorite = user.favoriteMusic.includes(musicId);
    const favoriteMusic = isFavorite
      ? user.favoriteMusic.filter((favMusId) => favMusId !== musicId) // Delete
      : [...user.favoriteMusic, musicId]; // Add

    setUser({
      ...user,
      favoriteMusic,
    });
  };

  const data = { user, login, logout, toggleFavoriteMusicToUser };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
