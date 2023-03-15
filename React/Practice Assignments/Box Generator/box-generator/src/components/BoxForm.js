import React, { useState } from  'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setCurrentColor( [...props.currentColor, {color: color, size: size + "px"}] );
        setColor("");
        setSize(100);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className='form-group row justify-content-center my-2'>
                <label className='col-sm-1 col-form-label'>Color: </label>
                <div className="col-sm-2">
                    <input type="text" value={ color } className="form-control" onChange={ (e) => setColor(e.target.value) } />
                </div>
                <label className='col-sm-1 col-form-label'>Size: </label>
                <div className="col-sm-2">
                    <input type="number" value={ size } className="form-control" onChange={ (e) => setSize(e.target.value) } />
                </div>
                <button type="submit" class="col-sm-1 btn btn-primary">Add</button>
            </div>
        </form>
    );
}

export default BoxForm;