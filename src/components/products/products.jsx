import React from 'react';
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    { id: 1, name: 'Phone', description: 'Samsung A10', price: '350€', image: 'https://www.allround-pc.com/wp-content/uploads/2019/03/Samsung-Galaxy-S10-und-S10-11-1112x625.jpg' },
    { id: 2, name: 'Computer', description: 'MacBook Air', price: '2100€', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg' }
]

const Products = () => {
    console.log(products)
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;