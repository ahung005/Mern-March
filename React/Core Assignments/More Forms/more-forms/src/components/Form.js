import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters");
        } 
        else {
            setFirstnameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        }
        else {
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        }
        else {
            setEmailError("");
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmpasswordError("Passwords must match");
        }
        else {
            setConfirmpasswordError("");
        }
    }

    return(
            <form>
                <div className='form-group row justify-content-center my-3'>
                    <label className="col-sm-2 col-form-label">First Name: </label> 
                    <div className="col-sm-4">
                        <input  type="text" value={ firstname } className="form-control" onChange={ handleFirstname } />
                    </div>
                    {
                        firstnameError ? <p>{ firstnameError }</p> : ""
                    }
                </div>
                <div className='form-group row justify-content-center my-3'>
                    <label className="col-sm-2 col-form-label">Last Name: </label> 
                    <div className="col-sm-4">
                        <input type="text" value={ lastname } className="form-control" onChange={ handleLastname } />
                    </div>
                    {
                        lastnameError ? <p>{ lastnameError }</p> : ""
                    }
                </div>
                <div className='form-group row justify-content-center my-3'>
                    <label className="col-sm-2 col-form-label">Email: </label> 
                    <div className="col-sm-4">
                        <input type="text" value={ email } className="form-control" onChange={ handleEmail } />
                    </div>
                    {
                        emailError ? <p>{ emailError }</p> : ""
                    }
                </div>
                <div className='form-group row justify-content-center my-3'>
                    <label className="col-sm-2 col-form-label">Password: </label>
                    <div className="col-sm-4">
                        <input type="password" value={ password } className="form-control" onChange={ handlePassword } />
                    </div>
                    {
                        passwordError ? <p>{ passwordError }</p> : ""
                    }
                </div>
                <div className='form-group row justify-content-center my-3'>
                    <label className="col-sm-2 col-form-label">Confirm Password: </label>
                    <div className="col-sm-4">
                        <input type="password" value={ confirmpassword } className="form-control" onChange={ handleConfirmpassword } />
                    </div>
                    {
                        confirmpasswordError ? <p>{ confirmpasswordError }</p> : ""
                    }
                </div>
            </form>
    );
};
    
export default Form;
