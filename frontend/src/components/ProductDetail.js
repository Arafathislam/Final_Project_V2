import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'
import SingleProduct from './SingleProduct'
import SingleRelatedProduct from './SingleRelatedProduct'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const ProductDetail = () => {

  const baseUrl = 'http://127.0.0.1:8000/api'
  const [productData, setProductData] = useState([])
  const [productImgs, setProductImgs] = useState([])
  const [productTags, setProductTags] = useState([])
  const [relatedProduct, setRelatedProduct] = useState([])
  const { product_slug, product_id } = useParams();


  useEffect(() => {
    fetchData(baseUrl + `/product/` + product_id);
    fetchRelatedData(baseUrl + `/related-product/` + product_id);

  }, [])

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setProductImgs(data.product_imgs);
        setProductTags(data.tag_list);
      });
  }


  function fetchRelatedData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setRelatedProduct(data.results);
      });
  }


  function changeUrl(baseurl) {
    fetchData(baseurl);

  }



  const tagLinks = []
  for (let i = 0; i < productTags.length; i++) {
    let tag = productTags[i].trim();
    tagLinks.push(<Link className="badge bg-secondary text-white me-1" to={`/products/${tag}`}>{tag}</Link>)
  }




  return (
    <>
      <section className='container mt-4'>
        <div className="row">
          <div className="col-4">
            <div id="ProductThumbanilSlider" className="carousel carousel-fade carousel-dark slide bg-light  mt-4" data-bs-ride="true">
              <div className="carousel-indicators">
                {productImgs && productImgs.map((img, index) => {
                  if (index === 0) {
                    return <button type="button" data-bs-target="#ProductThumbanilSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                  } else {
                    return <button type="button" data-bs-target="#ProductThumbanilSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                  }
                })

                }


              </div>


              <div className="carousel-inner">

                {
                  productImgs && productImgs.map((img, index) => {
                    if (index === 0) {
                      return <div className="carousel-item active">

                        <img src={img.image} className="img-thumbnail mb-5" alt={index} />

                      </div>
                    } else {
                      return <div className="carousel-item">

                        <img src={img.image} className="img-thumbnail mb-5" alt={index} />

                      </div>

                    }
                  })}
              </div>


              <button className="carousel-control-prev" type="button" data-bs-target="#ProductThumbanilSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#ProductThumbanilSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-8">
            <h3>{productData.title}</h3>
            <p>{productData.detail}</p>
            <h5 className='card-title'>Price: {productData.price}Tk</h5>
            <p className='mt-3'>
              <Link title="Demo" to={productData.demo_url} target="_blank" className="btn btn-dark ms-1 "><i className="fa-solid fa-cart-plus fa-1x"></i>  Demo</Link>
              <button title="Add to cart" className="btn btn-primary ms-1 "><i className="fa-solid fa-cart-plus fa-1x"></i>  Add to Cart</button>
              <button title="Buy Now" className="btn btn-success  ms-1"><i className="fa-solid fa-bag-shopping"></i> Buy Now</button>
              <button title="Add to wish list" className="btn btn-danger  ms-1"><i className="fa fa-heart fa-1x"></i> Wishlist</button>
            </p>

            <div className="producttags mt-4">
              <h5>Tags</h5>
              <p >
                {tagLinks}
              </p>

            </div>
          </div>


        </div>


        {/* Related Product  */}

        { relatedProduct.length>0 &&
        <>
        <h3 className='mt-5 mb-3 text-center'>Related Products</h3>
        <div id="relatedProductSlider" className="carousel carousel-dark slide bg-light  mt-4" data-bs-ride="true">
          <div className="carousel-indicators">
            {relatedProduct && relatedProduct.map((product, index) => {
              if (index === 0) {
                return <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
              } else {
                return <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
              }
            })

            }

          </div>
          <div className="carousel-inner">


            {
              relatedProduct && relatedProduct.map((product, index) => {
                if (index === 0) {
                  return <div className="carousel-item active">

                    <SingleRelatedProduct product={product} />

                  </div>
                } else {
                  return <div className="carousel-item">
                    <SingleRelatedProduct product={product} />


                  </div>

                }
              })}






          </div>

        </div>

        </>
            }

        {/* end related product */}
      </section>

    </>
  )
}

export default ProductDetail