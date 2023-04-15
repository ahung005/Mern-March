import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const OneProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${ id }`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${ id }`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='mt-5'>
            <h1>{ oneProduct.title }</h1> 
            <h3 className="fs-5 my-2">Price: ${ oneProduct.price }</h3>
            <h4 className="fs-6 my-2">Description: { oneProduct.description }</h4>
            <div className="text-center">
                <button onClick={ deleteHandler } className='btn btn-danger my-3' >Delete</button>
            </div>
        </div>
    );
};

export default OneProduct;