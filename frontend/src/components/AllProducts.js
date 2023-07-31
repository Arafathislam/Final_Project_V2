import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
import SingleProduct from './SingleProduct'
const AllProducts = () => {
  return (
   <>
   <section className="container mt-4">

             {/* Latest Product */}
             <h3 className="mb-4">All Products <a href="#" className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            {/* product box */}
              <SingleProduct title="Django Product" />
              <SingleProduct title="Django Product"/>
              <SingleProduct title="Django Product"/>
              <SingleProduct title="Django Product"/>
              <SingleProduct title="Django Product"/>

            {/* product box end */}








          </div>
          {/* end latest product */}

          {/* pagination start */}

          <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

          {/* pagination end */}


          </section>
   </>
  )
}

export default AllProducts