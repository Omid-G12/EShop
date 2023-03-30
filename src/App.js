import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    // console.log("item:")
    // console.log(item)
    setCart(item);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  // console.log("cart:")
  // console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App;