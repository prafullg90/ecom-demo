import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/Reducers/products';
const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.carts);
  const dispatch = useDispatch();

  const productsArr = products?.map((item) => {
    const prodId = item.id;
    const prodInCart = cart[prodId] || 0;
    return (
      <Product
        item={item}
        addtoCart={(val) => dispatch(addCart(val.id))}
        decrement={(val) => dispatch(decrementQuantity(val.id))}
        prodInCart={prodInCart}
      />
    );
  });
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {productsArr}
    </Grid>
  );
};

export default ProductList;
