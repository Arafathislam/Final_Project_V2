import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
import SellerSidebar from './SellerSidebar'
const VendorProfile = (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                </div>

                    <div className="col-md-9 col-12 ">
                        <div className="card">
                            <h4 className="card-header">Update Profile</h4>
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
                                            <label for="image" className="form-label">Profile Image</label>
                                            <input type="file" className="form-control" id="image"/>
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

export default VendorProfile