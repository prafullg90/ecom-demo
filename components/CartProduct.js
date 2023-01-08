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
export default function CartProduct({
  item,
  addtoCart,
  prodInCart,
  increment,
  decrement,
}) {
  const theme = useTheme();
  const buttons = [
    <Button key='one' onClick={() => addtoCart(item)} variant='contained'>
      +
    </Button>,
    <Button key='two'>{prodInCart}</Button>,
    <Button key='three' onClick={() => decrement(item)} variant='contained'>
      -
    </Button>,
  ];

  const renderButton = () => {
    if (prodInCart == 0) {
      return (
        <Button variant='outlined' onClick={() => addtoCart(item)}>
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
              image={item.image}
              alt={item.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {item.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'
                >
                  {item.description}
                </Typography>
              </CardContent>
              <Grid
                container
                direction='row-reverse'
                justifyContent='flex-start'
                alignItems='flex-end'
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'right', pl: 1, pb: 1 }}
                >
                  {renderButton()}
                </Box>
              </Grid>
            </Box>
          </Card>
        </Paper>
      </Box>
      <br></br>
    </Grid>
  );
}
