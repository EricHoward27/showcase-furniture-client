import React from 'react'
import Ratings from '../components/Ratings'
const ProductScreen = (props) => {
  const { name, image, ratings, numReviews, price, description, countInStock, id } = props
  if (!id) {
    return <div> Product not found</div>
  }
  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img src={ image } alt={ name } />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{ name }</h1>
            </li>
            <li>
              <Ratings ratings={ ratings } numReviews={ numReviews }/>
            </li>
            <li>Price: ${ price }</li>
            <li>
              Description:
              <p>{ description }</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${ price }</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    { countInStock > 0 ? ( <span className="success">In Stock</span> ) : ( <span className="error">Unavailable</span> ) }
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductScreen