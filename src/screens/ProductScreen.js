import React from 'react'
import Ratings from '../components/Ratings'
import data from '../data'
const ProductScreen = (props) => {
  const product = data.products.find((p) => p.id === props.match.params.id)
  if (!product) {
    return <div> Product not found</div>
  }
  return (
  <div className="container-flex">
  <div className="card mb-3" style={{maxWidth:'800px'}}>
    <div className="row no-gutters">
    <div className="col-md-4">
      <img src={product.image} className="card-img" alt={product.name} />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small className="text-muted"><Ratings ratings={product.ratings} numReviews={product.numReviews}/> </small></p>
        <button className="btn btn-secondary">Start Your Order</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
export default ProductScreen