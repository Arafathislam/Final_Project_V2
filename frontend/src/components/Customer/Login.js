import React from 'react'
import { useState } from 'react'
const Login= (props) => {

    const [loginFormData,setLoginFormData]=useState({
        "username":'',
        "password":''
    });

    const inputHandler =(event)=>{
        setLoginFormData({
            ...loginFormData,
            [event.target.name]:event.target.value
        })
    };



    const submitHandler =(event)=>{
      const  formData=new FormData();
        formData.append('username',loginFormData.username);
        formData.append('password',loginFormData.password);

        console.log(formData);
    };

    const buttonEnable=(loginFormData.username!=='') &&(loginFormData.password!=='')


    return (
        <>
            <div className="container mt-4">
            

                <div className="row">
                    <div className="col-md-8 col-12 offset-2">
                        <div className="card">
                            <h4 className="card-header">Login</h4>
                            <div className="card-body">
                                <div className="table-response">
                                    <form>


                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">User Name</label>
                                            <input type="text" name="username" onChange={inputHandler} value={loginFormData.username}  className="form-control" id="username" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" onChange={inputHandler} value={loginFormData.password}  name="password" className="form-control" id="password"/>
                                        </div>
                                        <button type="button"  disabled={!buttonEnable} onClick={submitHandler}  className="btn btn-primary">Login</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Login;