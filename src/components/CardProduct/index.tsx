import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Container, List, Card, Text, WrapperImage, Image, WrapperText, Description } from './style';


const MY_PRODUCTS = gql`
query products {
  fullproduct {
    id
    name
    description
    image {
      url
    }
  }
}

`

type ArrayProducts = {
  fullproduct: ProductsProps[]
}

type ProductsProps = {
  id: string;
  name: string;
  description: string
  image: {
    url: string;
  }
}


export function CardProduct() {
  const { data, error } = useQuery<ArrayProducts>(MY_PRODUCTS);

  if (error) return <Container><Text>{error.message}</Text></Container>

  const renderItem = (product: any) => (
    <Card key={product.id}>
      <WrapperImage><Image source={{ uri: product.image.url }} /></WrapperImage>
      <WrapperText>
        <Text>{product.name}</Text>
        <Description>{product.description}</Description>
      </WrapperText>
    </Card>
  )

  return (
    <Container>
      <List
        data={data?.fullproduct}
        renderItem={({ item }) => renderItem(item)}
      />
    </Container>
  )
}