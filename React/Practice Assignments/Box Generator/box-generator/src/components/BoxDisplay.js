import React from 'react';

const BoxDisplay = (props) => {
    return (
        <div className='d-flex justify-content-center my-2'> 
        {
            props.addColor.map((item, index) => (<div key={index} className='mx-2' style={{ 
                height: item.size,
                width: item.size,
                backgroundColor: item.color}}></div>))
        }
        </div>
    );
}

export default BoxDisplay;