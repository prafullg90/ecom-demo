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

export default function Product({
  item,
  addtoCart,
  prodInCart,
  increment,
  decrement,
}) {
  const buttons = [
    <Button key='one' onClick={() => addtoCart(item)}>
      +
    </Button>,
    <Button key='two'>{prodInCart}</Button>,
    <Button key='three' onClick={() => decrement(item)}>
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
            </CardContent>
            <CardActions>{renderButton()}</CardActions>
          </Card>
        </Paper>
      </Box>
      <br></br>
    </Grid>
  );
}
