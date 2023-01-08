import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeChangeSwitch from './ThemeSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { themeToggled } from '../redux/Reducers/themes';
import Link from 'next/link';

function ResponsiveAppBar() {
  const dispatch = useDispatch();

  const themeType = useSelector((state) => state.theme);
  const cart = useSelector((state) => state.products.carts);
  const cartValues = Object.values(cart);
  const sum = cartValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <ShoppingCartIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Link href='/' passref>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MyCart
            </Typography>
          </Link>
          <ShoppingCartIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Link href='/' passref>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MyCart
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
            <Link href='/cart'>
              <IconButton
                size='large'
                aria-label='Show cart with number of items'
                color='inherit'
              >
                <Badge badgeContent={sum} color='error'>
                  <ShoppingCartTwoToneIcon />
                </Badge>
              </IconButton>
            </Link>
            <ThemeChangeSwitch
              theme={themeType}
              onChange={() => dispatch(themeToggled())}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
