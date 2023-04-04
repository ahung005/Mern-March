import React, { useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    return (
        <div>
            <Product product={ product } setProduct={ setProduct } />
            <hr/>
            <ProductList product={ product } setProduct={ setProduct } />
        </div>
    )
}
export default Main;
