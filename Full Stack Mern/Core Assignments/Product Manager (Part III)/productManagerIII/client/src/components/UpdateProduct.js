import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const [headerTitle, setHeaderTitle] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                
                setHeaderTitle(res.data.title);
            })
            .catch((err) => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, { title, price, description, })
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
            <h1>Update { headerTitle }</h1>

            <form onSubmit={ submitHandler }>
            <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Title: </label>
                    <div className="col-sm-3">
                        <input type="text" name="title" value={title} className="form-control" onChange={ (e) => { setTitle(e.target.value) } } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Price: </label>
                    <div className="col-sm-3">
                        <input type="number" name="price" value={price} className="form-control" onChange={ (e) => { setPrice(e.target.value) } } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-4'>
                    <label className="col-sm-1 col-form-label">Description: </label>
                    <div className="col-sm-3">
                        <input type="text" name="description" value={description} className="form-control" onChange={ (e) => { setDescription(e.target.value) } } />
                    </div>
                </div>
                <input type="submit" className='btn btn-secondary' value="Update"/>
            </form>
        </div>
    );
};

export default UpdateProduct;