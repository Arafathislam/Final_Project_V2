import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
const ProductDetail = () => {
  return (
    <>
    <section className='container'>
        <div className="row">
        <div className="col-4">
        <Link to="product/python-timer/123"><img src={logo} className="img-thumbnail" alt="..." /></Link>
        </div>
        <div className="col-8">
            <h3>Product Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam, minus fuga assumenda aut labore iste, illum aspernatur impedit quidem quaerat et blanditiis, error repudiandae odit nihil velit esse. Impedit est mollitia ducimus natus?</p>
            <h5 className='card-title'>Price: 50Tk</h5>
            <p className='mt-3'>
            <Link title="Demo" target="_blank"className="btn btn-dark ms-1 "><i className="fa-solid fa-cart-plus fa-1x"></i>  Demo</Link>
            <button title="Add to cart" className="btn btn-primary ms-1 "><i className="fa-solid fa-cart-plus fa-1x"></i>  Add to Cart</button>
            <button title="Buy Now" className="btn btn-success  ms-1"><i className="fa-solid fa-bag-shopping"></i> Buy Now</button>
           <button title="Add to wish list" className="btn btn-danger  ms-1"><i className="fa fa-heart fa-1x"></i> Wishlist</button>
            </p>
            
            <div className="producttags mt-4">
                <h5>Tags</h5>
            <p >
                <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
            </p>

            </div>
        </div>

       
        </div>

    </section>
    </>
  )
}

export default ProductDetail