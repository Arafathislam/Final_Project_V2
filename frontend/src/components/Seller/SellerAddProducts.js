import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.svg'
import SellerSidebar from './SellerSidebar'
const SellerAddProducts = (props) => {
    return (
        <>
            <div className="container mt-4">


                <div className="row">
                <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                </div>

                    <div className="col-md-9 col-12 ">
                        <div className="card">
                            <h4 className="card-header">Add Product</h4>
                            <div className="card-body">
                                <div className="table-response">
                                    <form>
                                    <div className="mb-3">
                                            <label for="title" className="form-label">Category</label>
                                            <select name="" id="" className='form-control'>
                                                <option value="">python</option>
                                                <option value="">java</option>
                                                <option value="">c/c++</option>
                                            </select>
                                                
                                        </div>
                                    <div className="mb-3">
                                            <label for="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="Price" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="desc" className="form-label ">Description</label>
                                            <textarea className="form-control"  rows="8" id="desc" />
                                                
                                        </div>
                                        <div className="mb-3">
                                            <label for="productimage" className="form-label">Product Images</label>
                                            <input type="file" className="form-control" id="productimage"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default SellerAddProducts