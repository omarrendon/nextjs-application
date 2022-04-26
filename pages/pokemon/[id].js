import { useState } from 'react';
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { existInFavorites, toggleFavorites } from '../../utils';
import Image from 'next/image';

const PokemonPage = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(existInFavorites(pokemon.id));

  const onToggleFavorites = () => {
    toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites)
  };

  return (
    <Layout title={`Pokemon : ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToggleFavorites}
              >
                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id }
    })),
    fallback: false,
  }
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const { data } = await pokeApi.get(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    }, // will be passed to the page component as props
  }
}


export default PokemonPage;