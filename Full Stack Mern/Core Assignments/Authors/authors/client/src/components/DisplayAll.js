import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    
    const [authorList, setAuthorList] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                
                res.data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 );

                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${ id }`)
            .then((res) => {
                console.log(res.data);
                
                setAuthorList(authorList.filter( (author, index) => author._id !== id ));
                console.log("authorList DisplayAll.js: ", authorList);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1 className="text-start">Favorite Authors</h1>
            <div className="text-start">
                <Link to={ `/new` } >Add an author</Link>
            </div>
            <h5 className="text-start purple mt-4">We have quotes by:</h5>
            <table className="table table-bordered table-striped w-75">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authorList.map((author) => (
                        <tr key={ author._id }>
                            <th>{ author.name }</th>
                            <th>
                                <button className='btn btn-secondary w-25 mx-2' onClick={ () => { navigate(`/edit/${ author._id }`) } }>Edit</button>
                                <button className='btn btn-secondary w-25 mx-2' onClick={ () => { deleteFilter(author._id) } }>Delete</button>
                            </th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default DisplayAll;