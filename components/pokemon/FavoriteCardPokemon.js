import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const FavoriteCardPokemon = ({ id }) => {
  const router = useRouter();

  const onFavoriteCliked = () => {
    router.push(`/pokemon/${id}`)
  };

  return (
    <Grid xs={6} sm={6} md={2} xl={1} onClick={onFavoriteCliked}>
      <Card
        hoverable
        clickable
        css={{
          padding: 10
        }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon"
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}
