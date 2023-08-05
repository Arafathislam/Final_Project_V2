import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
import SellerSidebar from './SellerSidebar'
const Customers = (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>

                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>


                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                            John Doe

                                            </td>
                                            <td>islamarafath315@gmail.com</td>
                                            <td>0144455555</td>
                                  
                                            <td>  
 
                                                <button className='btn btn-primary btn-sm me-1'>Orders</button>
                                                <button className='btn btn-danger btn-sm'>Remove from list</button>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>1</td>
                                            <td>
                                            John fon

                                            </td>
                                            <td>islamarafath315@gmail.com</td>
                                            <td>0144455555</td>
                                  
                                            <td>  
                                                <button className='btn btn-primary btn-sm me-1'>Orders</button>
 
                                                <button className='btn btn-danger btn-sm'>Remove from list</button>
                                            </td>
                                        </tr>





                                        
   
     
                                    </tbody>

                                </table>
                            </div>




                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Customers