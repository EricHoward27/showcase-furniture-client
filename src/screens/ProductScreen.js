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
    <div className="col-md-7">
      <img src={product.image} className="card-img" alt={product.name} />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h1 className="card-title">{product.name}</h1>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small className="text-muted"><Ratings rating={product.rating} numReviews={product.numReviews}/> </small></p>
        <ul className="list-group">
          <li className="list-group-item">Price: ${product.price}</li>
        </ul><br />
        <button className="btn btn-secondary">Start Your Order</button>
      </div>
    </div>
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">The Showcase Experience</h2>
        <h3 className="section-subheading text-muted">Make Your Place A SHOWCASE!</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">Flexible Payment</h4>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">1-Year Same as CASH</h4>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">Delivery & Setup</h4>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
export default ProductScreen