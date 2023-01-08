import Head from 'next/head';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { API } from '../lib/api';
import { useSelector, useDispatch } from 'react-redux';
import { productList } from '../redux/Reducers/products';
import ProductList from '../components/ProductList';
export default function Home() {
  const [isLoading, setisLoading] = useState(false);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('products', products);
    if (!products.length) {
      setisLoading(true);
      const cb = {
        success: (res) => {
          dispatch(productList(res));
          setisLoading(false);
        },
        error: (err) => {
          console.log(err);
          setisLoading(false);
        },
      };
      const params = {};
      API.getAllProducts({}, cb);
    }
  }, [products, dispatch]);
  return (
    <>
      <Head>
        <title>My Cart</title>
        <meta name='description' content='My Cart Demo App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        {isLoading ? (
          <Grid container justifyContent='center'>
            <CircularProgress />
          </Grid>
        ) : (
          <ProductList products={products} />
        )}
      </PageLayout>
    </>
  );
}
