import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, decrementQuantity } from '../redux/Reducers/products';
import CartProduct from './CartProduct';
import { useEffect, useState } from 'react';
const ProductList = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.carts);
  const dispatch = useDispatch();
  const newProducts = products.filter((prod) => cart[prod.id]);

  useEffect(() => {
    const sum = newProducts.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * cart[currentValue.id],
      0
    );
    setTotalPrice(sum);
  }, [cart]);
  const productsArr = newProducts?.map((item) => {
    const prodId = item.id;
    const prodInCart = cart[prodId] || 0;
    return (
      <CartProduct
        key={prodId}
        prod={item}
        addtoCart={(val) => dispatch(addCart(val.id))}
        decrement={(val) => dispatch(decrementQuantity(val.id))}
        prodInCart={prodInCart}
      />
    );
  });
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {productsArr}

      <Grid
        container
        direction='row-reverse'
        justifyContent='flex-start'
        alignItems='flex-end'
      >
        {newProducts.length ? (
          <Button variant='contained'>{`Checkout - Total ${totalPrice.toFixed(
            2
          )}`}</Button>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ProductList;
