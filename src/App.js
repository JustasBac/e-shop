import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import { commerce } from './lib/commerce'


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []) //runs only at the start

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
