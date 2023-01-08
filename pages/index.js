import Head from 'next/head';
import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { API } from '../lib/api';
import { useSelector, useDispatch } from 'react-redux';
import { productList } from '../redux/Reducers/products';
import ProductList from '../components/ProductList';
export default function Home() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('products', products);
    if (!products.length) {
      const cb = {
        success: (res) => {
          dispatch(productList(res));
        },
        error: (err) => {
          console.log(err);
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
        <ProductList products={products} />
      </PageLayout>
    </>
  );
}
