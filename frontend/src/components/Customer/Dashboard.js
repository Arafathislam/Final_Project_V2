import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
const Dashboard = (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active">Dashboard</a>
                            <a href="#" className="list-group-item list-group-item-action">Orders</a>
                            <a href="#" className="list-group-item list-group-item-action">Wishlist</a>
                            <a href="#" className="list-group-item list-group-item-action">Profile</a>
                            <a href="#" className="list-group-item list-group-item-action">Addresses </a>
                            <a href="#" className="list-group-item list-group-item-action text-danger">Logout </a>
                        </div>
                    </div>

                    <div className="col-md-9 col-12 mb-2">
                      <div className="row">
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Orders</h4>
                                    <h4><Link to="#">123</Link></h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Orders</h4>
                                    <h4><Link to="#">123</Link></h4>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Addresses</h4>
                                    <h4><Link to="#">12</Link></h4>

                                </div>
                            </div>
                        </div>


                        
                      </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Dashboard