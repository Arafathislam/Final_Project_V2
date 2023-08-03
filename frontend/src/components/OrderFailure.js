import React from 'react'
import { Link } from 'react-router-dom'
const OrderFailure = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8 offset-2">
                        <div className="card">
                            <div className="card-body text-center">
                                <p className='fa fa-times-circle text-danger fa-3x'></p>
                                <h3 className='text-danger'>Oops.. Something wrong happend</h3>
                                <p className='mt-4'>
                                <Link  to="/home" className="btn btn-primary"> Home</Link>
                                <Link  to="/customer/dashboard" className="btn btn-secondary ms-2">Dashboard</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </>
    )
}

export default OrderFailure