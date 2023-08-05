import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
const SingleProduct = (props) => {
  return (
    <>
    
                {/* product box */}
                <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <Link to="product/python-timer/123"><img src={logo} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title"><Link to="/product/python-timer/123">{props.product.title}</Link></h5>
                  <h5 className="card-title">Price: <span className="text-muted">{props.product.price}</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus fa-1x"></i></button>
                  <button title="Add to wish list" className="btn btn-danger btn-sm ms-1"><i className="fa fa-heart fa-1x"></i></button>
                </div>
              </div>
            </div>
            {/* product box end */}
    
    </>
  )
}

export default SingleProduct