import React, { useState, useEffect } from 'react'
import { FavoritePokemon } from '../../components/pokemon/FavoritePokemon';
import { NoFavorites } from '../../components/ui/NoFavorites'
import { Layout } from '../../components/layouts'
import { pokemons } from '../../utils';

export default function FavoritesPage() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  useEffect(() => {
    setFavoritePokemon(pokemons());
  }, []);

  return (
    <Layout title='Favoritos'>
      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemon pokemons={favoritePokemon} />
      )}
    </Layout>
  )
}
