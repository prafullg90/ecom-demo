import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';

const ProductList = ({ products }) => {
  const productsArr = products?.map((item) => <Product item={item} />);
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {productsArr}
    </Grid>
  );
};

export default ProductList;
