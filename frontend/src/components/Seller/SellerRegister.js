import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
const SellerRegister = (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                    <div className="col-md-8 col-12 offset-2">
                        <div className="card">
                            <h4 className="card-header">Register</h4>
                            <div className="card-body">
                                <div className="table-response">
                                    <form>
                                    <div className="mb-3">
                                            <label for="firstname" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="firstname" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="lasttname" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="lastname" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="username" className="form-label">User Name</label>
                                            <input type="text" className="form-control" id="username" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default SellerRegister