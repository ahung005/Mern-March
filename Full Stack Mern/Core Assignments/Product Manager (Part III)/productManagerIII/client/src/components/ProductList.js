import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then((res) => {
                console.log(res.data);
                console.log("product:", product);
                const newProductList = product.filter((product, index) => product._id !== productID);
                console.log("newProductList", newProductList);
                setProduct(newProductList);
                console.log(product);
            })
            .catch((err) => {console.log(err)});
    }
    
    return (
        <div>
            {
                product.map((product, index)=>{
                return (<div className='d-flex justify-content-center App my-4 gap-3' key={ index }>
                    <h5><Link to={`/products/${ product._id }`}> { product.title }</Link></h5>
                    <Link to={`/products/update/${ product._id }`}>Update</Link>
                    <button onClick={ (e) => { deleteProduct(product._id) } } className='btn btn-danger'>Delete</button>
                </div>)
                })
            }
        </div>
    )
}
export default ProductList;

