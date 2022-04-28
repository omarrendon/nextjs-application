import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const PokemonCard = ({ pokemon }) => {
  const router = useRouter();
  
  const handleRedirect = (name) => router.push(`/name/${name}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={2} onClick={() => handleRedirect(pokemon.name)}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.image}
            width='100%'
            height='140px'
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
