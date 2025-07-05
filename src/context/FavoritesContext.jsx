import React from 'react';
import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const FavoriteContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoriteClick = (favorite) => {
    setFavorites((prevState) => {
      const existingFavorite = prevState.find((p) => p.id === favorite.id);
      if (existingFavorite) {
        return prevState.filter((p) => p.id !== favorite.id);
      } else {
        return [...prevState, favorite];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, favoriteClick }}>
      {children}
    </FavoriteContext.Provider>
  );
}

const useFavorites = () => useContext(FavoriteContext);

export { useFavorites, FavoritesProvider };

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
