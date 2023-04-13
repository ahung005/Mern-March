import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [initialTitle, setInitialTitle] = useState("");

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setInitialTitle(res.data.title);
            })
            .catch(err => console.log(err));
    }, [])

    const handleSumbit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description,})
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div className="App">
            <h1>Update { initialTitle }</h1>
            <form onSubmit={ handleSumbit }>
            <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Title: </label> 
                    <div className="col-sm-3">
                        <input type="text" name="title" value={ title } className="form-control" onChange={(e) => {setTitle(e.target.value)}} />
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
                <input type="submit" className='btn btn-secondary' value="Update"/>
            </form>
        </div>
    )
}
export default UpdateProduct;

