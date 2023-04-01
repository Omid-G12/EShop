import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import useStyles from './styles';

const CartItem = ({item}) => {
  const {classes} = useStyles();
  
  return (
    <Card>
      <CardMedia className={classes.media} image={item.image.url} alt={item.name} />
      <CardContent className={classes.cardContent}>
        <Typography variant='h4'>{item.name}</Typography>
        <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
    </Card>
  )
}

export default CartItem;