import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Container, List, Card, Text, WrapperImage, Image, WrapperText, Description, Price } from './style';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const MY_PRODUCTS = gql`
query products {
  fullproduct {
    id
    name
    description
    price
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
  price: number;
  image: {
    url: string;
  }
}


export function CardProduct() {
  const { data, error } = useQuery<ArrayProducts>(MY_PRODUCTS);

  if (error) return <Container><Text>{error.message}</Text></Container>

  const CurrentFormat = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: "BRL",

  })


  const renderItem = (product: ProductsProps) => (
    <Card key={product.id}>
      <WrapperImage><Image source={{ uri: product.image.url }} /></WrapperImage>
      <WrapperText>
        <Text>{product.name}</Text>
        <Description>{product.description}</Description>
        <Price>{CurrentFormat.format(product.price)}</Price>
      </WrapperText>
    </Card>
  )

  return (
    <Container>
      <List
        showsVerticalScrollIndicator={false}
        data={data?.fullproduct}
        renderItem={({ item }) => renderItem(item)}
      />
    </Container>
  )
}