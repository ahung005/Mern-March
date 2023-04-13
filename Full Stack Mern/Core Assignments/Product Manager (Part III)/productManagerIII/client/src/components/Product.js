import React, { useState } from "react";
import axios from "axios";

const Product = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

const handleSumbit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products" , {title, price, description,})
        .then((res) => {
            console.log(res); 
            console.log(res.data);

            //setProduct([...product, res.data]);
            setProduct([res.data, ...product]);
            console.log("Product.js Product: ", product);
        
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {console.log(err)})
}

    return (
        <div className="App">
            <h1>Product Manager</h1>
            <form onSubmit={ handleSumbit }>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Title: </label> 
                    <div className="col-sm-3">
                        <input  type="text" name="title" value={ title } className="form-control" onChange={(e) => {setTitle(e.target.value)}} />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Price: </label> 
                    <div className="col-sm-3">
                        <input type="number" name="price" value={ price } className="form-control" onChange={(e) => {setPrice(e.target.value)}} />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Description: </label> 
                    <div className="col-sm-3">
                        <input type="text" name="description" value={ description } className="form-control" onChange={(e) => {setDescription(e.target.value)}} />
                    </div>
                </div>
                <input type="submit" className='btn btn-secondary' value="Create"/>
            </form>
        </div>
    );
}

export default Product;