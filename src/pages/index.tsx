import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head'
import { getDataHome } from '../functions/home'
import { Container } from '../styles/pages/home'
import ProductCard from '../components/ProductCard';
import {
  Grid
} from '@mui/material';

interface allProductsInterface {
  allProducts: ProductInterface[];
}

export interface ProductInterface {
  id: number;
  name: string;
  imageURL: string;
  listPrice: string[];
  salePrice: string;
  favorite?: boolean;
  handleFavorite(): any;
  key?: number;
}


const Home = ({ allProducts }: allProductsInterface) => {

  const [favorites, setFavorites] = useState<ProductInterface[]>(allProducts);

  
  // Function to favorite product

  const handleFavorite = useCallback((id: number) => {
    let makeArrayOfFavorites = [...favorites];

    makeArrayOfFavorites.map(product => {
      if (product.id === id)
        product.favorite = !product.favorite
    })

    setFavorites(makeArrayOfFavorites);
    
  }, [favorites])

  return (
    <Container>
      <Head>
        <title>Produtos</title>
      </Head>

      <main>
        <section>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {allProducts.map((product, index) => (
              <ProductCard
                {...product}
                key={index}
                handleFavorite={() => handleFavorite(product.id)}
              />
            ))}
          </Grid>
        </section>
      </main>

    </Container>
  )
}

export async function getStaticProps() {
  let allProducts = await getDataHome();

  return {
    props: { allProducts },
  }
}

export default Home
