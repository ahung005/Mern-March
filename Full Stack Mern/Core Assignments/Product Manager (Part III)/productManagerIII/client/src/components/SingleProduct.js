import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const SingleProduct = (props) => {
    const [singleProduct, setSingleProduct] = useState({})
    const {id} = useParams(); 

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setSingleProduct(res.data);
            })
            .catch((err) => {console.log(err)});
    }, []);

    const deleteProductHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {console.log(err)});
    }

    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <h1>{ singleProduct.title }</h1> 
            <h6>Price: ${ singleProduct.price }</h6>
            <h6>Description: { singleProduct.description }</h6>
            <button onClick={ deleteProductHandler } className='btn btn-danger' >Delete</button>
        </div>
    );
}
export default SingleProduct;

