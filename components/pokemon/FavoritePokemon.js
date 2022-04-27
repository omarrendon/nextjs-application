import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

export const FavoritePokemon = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map((id) => (
          <FavoriteCardPokemon id={id} key={id} />
        ))
      }
    </Grid.Container>
  )
}
