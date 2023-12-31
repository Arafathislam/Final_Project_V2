import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
import Sidebar from './Sidebar'
const Dashboard = (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar/>
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
                                    <h4>Total Wishlist</h4>
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