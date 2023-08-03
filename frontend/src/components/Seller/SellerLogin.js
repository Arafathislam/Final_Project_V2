import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
const SellerLogin= (props) => {
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
                                            <label for="username" className="form-label">User Name</label>
                                            <input type="text" className="form-control" id="username" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
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

export default SellerLogin