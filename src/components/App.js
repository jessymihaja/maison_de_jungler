import { useState,useEffect } from 'react';
import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  return (
    <div>
      <Banner></Banner>
      <Cart cart={cart} updateCart={updateCart}></Cart>
      <ShoppingList cart={cart} updateCart={updateCart}></ShoppingList>
      <Footer></Footer>
    </div>
  )  
  
}

export default App;
