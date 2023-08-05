import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
import SellerSidebar from './SellerSidebar'
const VendorChangePass= (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                </div>

                    <div className="col-md-9 col-12 ">
                        <div className="card">
                            <h4 className="card-header">Change Password</h4>
                            <div className="card-body">
                                <div className="table-response">
                                    <form>

                                    <div className="mb-3">
                                            <label for="password1" className="form-label">New Password</label>
                                            <input type="password" className="form-control" id="password1"/>
                                        </div>


                                        <div className="mb-3">
                                            <label for="password2" className="form-label">Confirm Password</label>
                                            <input type="password" className="form-control" id="password2"/>
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

export default VendorChangePass