import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui/NoFavorites'
import { pokemons } from '../../utils';

export default function FavoritesPage() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  useEffect(() => {
    setFavoritePokemon(pokemons());
  }, []);
  console.log('pokemos', favoritePokemon);
  return (
    <Layout title='Favoritos'>
      {!favoritePokemon && (
        <NoFavorites />
      )}
    </Layout>
  )
}
