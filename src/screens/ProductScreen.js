import React from 'react'
import Ratings from '../components/Ratings'
import data from '../data'
const ProductScreen = (props) => {
  const product = data.products.find((p) => p.id === props.match.params.id)
  if (!product) {
    return <div> Product not found</div>
  }
  return (
  <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
              <div className="col-md-6">
                  <div className="small mb-1">SKU: BST-498</div>
                  <h1 className="display-5 fw-bolder">{product.name}</h1>
                  <div className="fs-5 mb-5">
                      <span className="text-decoration-line-through">${product.price}/ week</span>
                    <Ratings rating={product.rating} numReviews={product.numReviews}/>
                  </div>
                  <p className="lead">{product.description}</p>
                  <div className="d-flex">
                      <button className="btn btn-outline-dark flex-shrink-0" type="button">
                          <i className="bi-cart-fill me-1"></i>
                          Start Your Order
                      </button>
                  </div>
              </div>
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
          <p className="text-muted">Showcase offer hassle-free flexible payments, pay when you get paid. </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-cash-register fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">1-Year Same CASH</h4>
          <p className="text-muted">Showcase offer hassle-free flexible payments, pay when you get paid. </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-truck fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">Delivery & Setup</h4>
          <p className="text-muted">Showcase offer hassle-free flexible payments, pay when you get paid. </p>
        </div>
      </div>
    </div>
  </section>
    // {/* <div className="container">
    //   <div className="text-center">
    //     <h2 className="section-heading text-uppercase">The Showcase Experience</h2>
    //     <h3 className="section-subheading text-muted">Make Your Place A SHOWCASE!</h3>
    //   </div>
    //   <div className="row text-center">
    //     <div className="col-md-4">
    //       <span className="fa-stack fa-4x">
    //         <i className="fas fa-circle fa-stack-2x text-primary"></i>
    //         <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
    //       </span>
    //       <h4 className="my-3">Flexible Payment</h4>
    //       <p className="text-muted">Showcase offer hassle-free flexible payments, pay when you get paid. </p>
    //     </div>
    //     <div className="col-md-4">
    //       <span className="fa-stack fa-4x">
    //         <i className="fas fa-circle fa-stack-2x text-primary"></i>
    //         <i className="fas fa-cash-register fa-stack-1x fa-inverse"></i>
    //       </span>
    //       <h4 className="my-3">1-Year Same CASH</h4>
    //       <p className="text-muted">Showcase offer hassle-free flexible payments, pay when you get paid. </p>
    //     </div>
    //     <div className="col-md-4">
    //       <span className="fa-stack fa-4x">
    //         <i className="fas fa-circle fa-stack-2x text-primary"></i>
    //         <i className="fas fa-truck fa-stack-1x fa-inverse"></i>
    //       </span>
    //       <h4 className="my-3">Delivery & Setup</h4>
    //       <p className="text-muted">Showcase offer hassle-free flexible payments, pay when you get paid. </p>
    //     </div>
    //   </div>
    // </div> */}
  )
}
export default ProductScreen