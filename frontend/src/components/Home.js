import React from 'react'
import logo from '../../src/logo.svg'
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'
const Home = () => {

const products=[

  {'id':1,
    'title':'Laptop',
    'price':3232,
    'image':{logo},
  },

  {'id':2,
    'title':'Pc',
    'price':4232
  },

  {'id':3,
    'title':'Car',
    'price':32320
  },

  {
    'title':'vOLVO',
    'price':3232
  },
]



  return (
    <>
      <main className="mt-4">
        <div className="container">
          {/* Latest Product */}
          <h3 className="mb-4">Latest Products <Link to="/products" className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></Link></h3>
          <div className="row mb-4">
          {
            products && products.map((product) => <SingleProduct  product={product} />)
          }


            {/* product box */}
    
            {/* product box end */}

          </div>
          {/* end latest product */}


          {/* Popular  Category Product */}
          <h3 className="mb-4">Popular Categories <a href="#" className="float-end btn btn-dark">View All Category <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
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
          {/* end Popular category product */}



          {/* Popular Product */}
          <h3 className="mb-4">Popular Products <a href="#" className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            {/* product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Tk. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus fa-1x"></i></button>
                  <button title="Add to wish list" className="btn btn-danger btn-sm ms-1"><i className="fa fa-heart fa-1x"></i></button>
                </div>
              </div>
            </div>
            {/* product box end */}
            {/* product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Tk. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus fa-1x"></i></button>
                  <button title="Add to wish list" className="btn btn-danger btn-sm ms-1"><i className="fa fa-heart fa-1x"></i></button>
                </div>
              </div>
            </div>
            {/* product box end */}

            {/* product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Tk. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus fa-1x"></i></button>
                  <button title="Add to wish list" className="btn btn-danger btn-sm ms-1"><i className="fa fa-heart fa-1x"></i></button>
                </div>
              </div>
            </div>
            {/* product box end */}

            {/* product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title">Price: <span className="text-muted">Tk. 500</span></h5>
                </div>
                <div className="card-footer">
                  <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus fa-1x"></i></button>
                  <button title="Add to wish list" className="btn btn-danger btn-sm ms-1"><i className="fa fa-heart fa-1x"></i></button>
                </div>
              </div>
            </div>
            {/* product box end */}

          </div>
          {/* end popular product */}





          {/* Popular sellers   */}
          <h3 className="mb-4">Popular Sellers <a href="#" className="float-end btn btn-dark">View All Sellers <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className="row mb-4">
            {/* seller box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>

                </div>
                <div className="card-footer">
                  Categories:<a href="#">Car</a>,<a href="#">Bus</a>,<a href="#">Laptop</a>
                </div>
              </div>
            </div>
            {/* seller box end */}

            {/* seller box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>

                </div>
                <div className="card-footer">
                  Categories:<a href="#">Car</a>,<a href="#">Bus</a>,<a href="#">Laptop</a>
                </div>
              </div>
            </div>
            {/* seller box end */}


            {/* seller box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>

                </div>
                <div className="card-footer">
                  Categories:<a href="#">Car</a>,<a href="#">Bus</a>,<a href="#">Laptop</a>
                </div>
              </div>
            </div>
            {/* seller box end */}


            {/* seller box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>

                </div>
                <div className="card-footer">
                  Categories:<a href="#">Car</a>,<a href="#">Bus</a>,<a href="#">Laptop</a>
                </div>
              </div>
            </div>
            {/* seller box end */}

          </div>
          {/* end Popular sellers */}


          {/* Rating and Reviews */}

          <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <i className='fa fa-star text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <i className='fa fa-star text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* End Rating and Reviews */}





        </div>

      </main>

    </>
  )
}

export default Home