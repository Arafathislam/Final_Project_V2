import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
import SingleProduct from './SingleProduct'
import { useState, useEffect } from 'react'
const AllProducts = () => {
  const baseUrl='http://127.0.0.1:8000/api'
  const [products, setProducts] = useState([])
  const [totalResult, setTotalResult] = useState(0)
  


  useEffect(() => {
    fetchData(baseUrl+`/products`);

  },[])

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResult(data.count);
      });
  }

function changeUrl(baseurl){
fetchData(baseurl);

}

  var links = [];
  var limit=3;
  var totalLink=0;
  
    if(limit%2==0){
      totalLink=totalResult/limit;
   }else{
      totalLink=totalResult/limit + 1;
   }
  

  
  for (let i = 1; i <= totalLink; i++) {
    links.push(<li className="page-item"><Link className='page-link' onClick={()=>changeUrl(baseUrl+`/products/?page=${i}`)} to={`/products/?page=${i}`}>{i}</Link></li>)
  }

  return (
    <>
      <section className="container mt-4">

        {/* Latest Product */}
        <h3 className="mb-4">All Products <a href="#" className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
        <div className="row mb-4">
          {/* product box */}


          {
            products && products.map((product) => <SingleProduct product={product} />)
          }


          {/* product box end */}








        </div>
        {/* end latest product */}

        {/* pagination start */}

        <nav aria-label="Page navigation example">
          <ul className="pagination">

            {links}

          </ul>
        </nav>

        {/* pagination end */}


      </section>
    </>
  )
}

export default AllProducts