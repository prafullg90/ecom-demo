import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
export default function Product({
  item,
  addtoCart,
  prodInCart,
  increment,
  decrement,
}) {
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
        <Box display='flex' justifyContent='flex-start'>
          <Button variant='outlined' onClick={() => addtoCart(item)}>
            Add to Cart
          </Button>
        </Box>
      );
    } else {
      return (
        <Box display='flex' justifyContent='flex-start'>
          <ButtonGroup size='small' aria-label='small button group'>
            {buttons}
          </ButtonGroup>
        </Box>
      );
    }
  };

  return (
    <Grid xs={12} sm={4} md={3} columnSpacing={10}>
      <Box>
        <Paper elevation={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.description}
              </Typography>
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
                {`Rs.  ${item.price}`}
              </Typography>
            </CardContent>
            <CardActions>
              {renderButton()}
              <Box display='flex' justifyContent='flex-end'>
                <Rating
                  name='simple-controlled'
                  value={item.rating.rate}
                  onChange={(event, newValue) => {
                    //setValue(newValue);
                  }}
                />
              </Box>
            </CardActions>
          </Card>
        </Paper>
      </Box>
      <br></br>
    </Grid>
  );
}
