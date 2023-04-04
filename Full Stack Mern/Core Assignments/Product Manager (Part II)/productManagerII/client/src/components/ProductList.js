import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {product, setProduct} = props;
    
    useEffect(() => {
    	axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    
    return (
        <div>
            {
                product.map((product, index)=>{
                return (<div className='App my-4' key={ index }>
                    <h5><Link to={`/products/${ product._id }`}> { product.title }</Link></h5>
                </div>)
                })
            }
        </div>
    )
}
export default ProductList;

