import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
const Categories = () => {
  return (
    <>
    
    <section className='container mt-4'>
                  {/* Category Product */}
                  <h3 className="mb-4">All Categories </h3>
          <div className="row mb-2">
            {/* card box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                <h4 className="card-title"><Link to="/category/python/1">Python</Link></h4>

                </div>
                <div className="card-footer">
                  Product Downloads: 2356
                </div>
              </div>
            </div>
            {/* card box end */}


            {/* card box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title"><Link to="/category/python/1">Category title</Link></h4>

                </div>
                <div className="card-footer">
                  Product Downloads: 2356
                </div>
              </div>
            </div>
            {/* card box end */}


            {/* card box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>

                </div>
                <div className="card-footer">
                  Product Downloads: 2356
                </div>
              </div>
            </div>
            {/* card box end */}


            {/* card box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>

                </div>
                <div className="card-footer">
                  Product Downloads: 2356
                </div>
              </div>
            </div>
            {/* card box end */}




          </div>
          {/* end category product */}


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

export default Categories