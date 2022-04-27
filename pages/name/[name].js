import { useState } from 'react';
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { existInFavorites, toggleFavorites } from '../../utils';
import Image from 'next/image';
import confetti from 'canvas-confetti';

const PokemonByName = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(existInFavorites(pokemon.id));

  const onToggleFavorites = () => {
    toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        y: 0,
        x: 1,
      }
    })
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
  const { data: { results } } = await pokeApi.get(`/pokemon?limit=151`);
  const name = results.map(({ name }) => name);

  return {
    paths: name.map((el) => ({
      params: {name: el}
    })),
    fallback: false,
  }
};

export const getStaticProps = async (ctx) => {
  const { name } = ctx.params;
  const { data } = await pokeApi.get(`/pokemon/${name}`);

  return {
    props: {
      pokemon: data,
    }, // will be passed to the page component as props
  }
}


export default PokemonByName;