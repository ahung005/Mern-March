import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {title, price, description,})
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                setProductList([...productList, res.data]);
                console.log("productList CreateProduct.js: ", productList);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={ submitHandler }>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Title: </label> 
                    <div className="col-sm-3">
                        <input type="text" name="title" value={ title } className="form-control" onChange={ (e) => { setTitle(e.target.value) } } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Price: </label> 
                    <div className="col-sm-3">
                        <input type="number" name="price" value={ price } className="form-control" onChange={ (e) => { setPrice(e.target.value) } } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Description: </label>
                    <div className="col-sm-3">
                        <input type="text" name="description" value={ description } className="form-control" onChange={ (e) => { setDescription(e.target.value) } } />
                    </div>
                </div>
                <input type="submit" value="Create" className='btn btn-secondary' />
            </form>
        </div>
    );
};

export default CreateProduct;