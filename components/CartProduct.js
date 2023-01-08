import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CartProduct({
  prod,
  addtoCart,
  prodInCart,
  increment,
  decrement,
}) {
  const theme = useTheme();
  const buttons = [
    <Button key='one' onClick={() => addtoCart(prod)} variant='contained'>
      +
    </Button>,
    <Button key='two'>{prodInCart}</Button>,
    <Button key='three' onClick={() => decrement(prod)} variant='contained'>
      -
    </Button>,
  ];

  const renderButton = () => {
    if (prodInCart == 0) {
      return (
        <Button variant='outlined' onClick={() => addtoCart(prod)}>
          Add to Cart
        </Button>
      );
    } else {
      return (
        <ButtonGroup size='small' aria-label='small button group'>
          {buttons}
        </ButtonGroup>
      );
    }
  };
  return (
    <Grid xs={12} sm={12} md={12} columnSpacing={10}>
      <Box>
        <Paper elevation={3}>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component='img'
              sx={{ width: 151 }}
              image={prod.image}
              alt={prod.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {prod.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'
                >
                  {prod.description}
                </Typography>
              </CardContent>

              <Grid
                container
                direction='row-reverse'
                justifyContent='flex-start'
                alignItems='flex-end'
              >
                <Grid item xs={12} sm={4} md={3}>
                  <Typography
                    variant='h6'
                    component='h6'
                    color='blue'
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {`Rs.  ${prod.price}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <Rating
                    name='simple-controlled'
                    value={prod.rating.rate}
                    onChange={(event, newValue) => {
                      //setValue(newValue);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <Box
                    sx={{ display: 'flex', alignItems: 'right', pl: 1, pb: 1 }}
                  >
                    {renderButton()}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Paper>
      </Box>
      <br></br>
    </Grid>
  );
}
