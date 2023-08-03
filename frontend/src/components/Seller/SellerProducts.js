import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
import SellerSidebar from './SellerSidebar'
const SellerProducts = () => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar/>
                    </div>

                    <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                            <div className="col-12">
                        
                        <Link to="/seller/addproducts" className='btn btn-outline-primary mb-4 float-end'> <i className='fa fa-plus-circle'></i> Add Products</Link>
                        </div>
                        </div>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Product Title</td>
                                    <td>500</td>
                                    <td>Publiched</td>
                                    <td>
                                        <Link to="#" className='btn btn-info'>View</Link>
                                        <Link to="#" className='btn btn-primary ms-1'>Edit</Link>
                                        <Link to="#" className='btn btn-danger ms-1'>Delete</Link>
                                    </td>
                                </tr>
                                </tbody>

                                
                            </table>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default SellerProducts