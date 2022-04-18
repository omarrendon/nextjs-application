
import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';

export default function Home({ pokemons }) {
  return (
    <Layout title='Inicio'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons && pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const { data } = await pokeApi.get('/pokemon?limit=150');
  const pokemons = data.results.map((poke, id) => {
    return {
      ...poke,
      id: id + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`
    }
  });

  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  }
}
