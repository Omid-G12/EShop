import React from 'react';
import Grid from '@mui/material/Grid';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332665524_10_a?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520'},
  { id: 2, name: 'MacBook', description: 'Apple macbook.', price: '$10', image: 'https://m.media-amazon.com/images/I/51GB2CTc9vL._AC_SX522_.jpg'}
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent={'center'} spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
  
}

export default Products;