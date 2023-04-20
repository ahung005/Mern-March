import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddAuthor = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", { name })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                setName("");

                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <h1 className="text-start">Favorite Authors</h1>
            <div className="text-start">
                <Link to={ `/` } >Home</Link>
            </div>
            <h5 className="text-start purple mt-4">Add a new author:</h5>
            <form onSubmit={ submitHandler } className="border border-dark py-5 ps-3 pe-5 w-50">
                <div className='form-group text-start'>
                    <label className="col-form-label">Name: </label> 
                    <div className="w-75">
                        <input type="text" name="name" value={ name } className="form-control" onChange={ (e) => { setName(e.target.value) } } />
                    </div>
                </div>
                <div className="w-75 mt-1">
                {
                    errors.name?
                        <p className='text-danger'>{errors.name.message}</p>
                        :
                        null
                }
                </div>
                <div className="w-75">
                    <button className='btn btn-primary w-25 mx-2 mt-3' onClick={ () => { navigate(`/`) } }>Cancel</button>
                    <input type="submit" value="Submit" className='btn btn-primary w-25 mx-2 mt-3' />
                </div>
            </form>
        </div>
    );
};

export default AddAuthor;