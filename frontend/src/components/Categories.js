import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'

import { useState, useEffect } from 'react'
const Categories = () => {
  const baseUrl = 'http://127.0.0.1:8000/api'
  const [cat, setCat] = useState([])
  const [totalResult, setTotalResult] = useState(0)



  useEffect(() => {
    fetchData(baseUrl+'/categories');

  }, [])

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCat(data.results);
        setTotalResult(data.count);
      });
  }



  console.log(cat)

  function changeUrl(baseurl) {
    fetchData(baseurl);

  }

  var links = [];
  var limit=1;
  var totalLinks=totalResult/limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(<li className="page-item"><Link className='page-link' onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)} to={`/categories/?page=${i}`}>{i}</Link></li>)
  }

  return (
    <>
      <section className="container mt-4">

        {/* Latest Product */}
        <h3 className="mb-4">All Categories </h3>
        <div className="row mb-2">
          {/* product box */}


           {
            cat && cat.map((category) => 


              <div className="col-12 col-md-3 mb-4" key={category.id}>
                <div className="card shadow">
                  <img src={logo} className="card-img-top" alt={category.title} />
                  <div className="card-body">
                    <h4 className="card-title" ><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>

                  </div>
                  <div className="card-footer">
                    Product Downloads: 2356
                  </div>
                </div>
              </div>

            )
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

export default Categories





