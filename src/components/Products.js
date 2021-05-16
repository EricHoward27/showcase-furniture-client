import React from 'react'
import Ratings from './Ratings'

const Products = ({ productLinks }) => {
  return (
    <div className="row">
      { productLinks && productLinks.map(({ price, image, description, name, rating, numReviews, id }, index) =>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href={`/product/${id}`}><img className="card-img-top" src={ image } alt="..." /></a>
                <div className="card-body">
                    <h4 className="card-title"><a href={`/product/${id}`}>{ name }</a></h4>
                    <h5>{ price }</h5>
                    <p className="card-text">{ description }</p>
                </div>
              <div className="card-footer"><Ratings rating={ rating } numReviews={ numReviews }/></div>
            </div>
        </div>
      )}
    </div>
  )
}
export default Products