import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
import SingleProduct from './SingleProduct'
import { useState,useEffect } from 'react'
const AllProducts = () => {

   const products =[

    {
      'title':'python',
      'price':100
    },
    {
      'title':'django',
      'price':120
    },
    {
      'title':'flask',
      'price':300
    },
    
   ]

   const [Products,setProducts]=useState([])
useEffect(()=>{
fetchData('http://127.0.0.1:8000/api/products/')

})

function fetchData(baseurl){
  fetch(baseurl)
     .then((response) =>response.json())
     .then((data)=> setProducts(data.results));
}

  return (
   <>
   <section className="container mt-4">

             {/* Latest Product */}
             <h3 className="mb-4">All Products <a href="#" className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            {/* product box */}


            {
              Products.map((product,index)=> <SingleProduct key={index} product={product} />)
            }
             
   
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