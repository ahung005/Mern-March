import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    
    const { productList, setProductList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (id) => {
        axios.delete(`http://localhost:8000/api/products/${ id }`)
            .then((res) => {
                console.log(res.data);
                
                setProductList(productList.filter( (product, index) => product._id !== id ));
                console.log("productList DisplayAll.js: ", productList);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2>All Products</h2>
            {
                productList.map((product, index) => (
                    <div key={ index } className='App my-4 gap-3' >
                        <Link to={ `/product/${ product._id }` } className="align-middle fs-4 mx-2">{ product.title }</Link>
                        <button className='btn btn-primary mx-2' onClick={ () => { navigate(`/product/update/${ product._id }`) } }>Update</button>
                        <button className='btn btn-danger mx-2' onClick={ () => { deleteFilter(product._id) } }>Delete</button>
                    </div>
                ))
            
            }
        </div>
    );
};

export default DisplayAll;