import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");
    
    
    return(
        <>
            <form>
                <div className='form-group row justify-content-center my-1'>
                    <label className="col-sm-2 col-form-label">First Name: </label> 
                    <div className="col-sm-5">
                        <input  type="text" value={ firstname } className="form-control" onChange={ (e) => setFirstname(e.target.value) } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-1'>
                    <label className="col-sm-2 col-form-label">Last Name: </label> 
                    <div className="col-sm-5">
                        <input type="text" value={ lastname } className="form-control" onChange={ (e) => setLastname(e.target.value) } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-1'>
                    <label className="col-sm-2 col-form-label">Email: </label> 
                    <div className="col-sm-5">
                        <input type="text" value={ email } className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-1'>
                    <label className="col-sm-2 col-form-label">Password: </label>
                    <div className="col-sm-5">
                        <input type="password" value={ password } className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                </div>
                <div className='form-group row justify-content-center my-1'>
                    <label className="col-sm-2 col-form-label">Confirm Password: </label>
                    <div className="col-sm-5">
                        <input type="password" value={ confirmpassword } className="form-control" onChange={ (e) => setConfirmpassword(e.target.value) } />
                    </div>
                </div>

            </form>
            <div>
                <h2>Your Form Data</h2>
                <p>First Name: { firstname }</p>
                <p>Last Name: { lastname }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmpassword }</p>
            </div>
        </>
    );
};
    
export default Form;
