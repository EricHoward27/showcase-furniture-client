import React from 'react'

const Products = ({ productLinks }) => {
  return (
    <div className="row">
      { productLinks && productLinks.map(({ price, image, description, rating, name }, index) =>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#!"><img className="card-img-top" src={ image } alt="..." /></a>
                <div className="card-body">
                    <h4 className="card-title"><a href="#!">{ name }</a></h4>
                    <h5>{ price }</h5>
                    <p className="card-text">{ description }</p>
                </div>
                <div className="card-footer"><small className="text-muted">{ rating }</small></div>
            </div>
        </div>
      )}
    </div>
  )
}
export default Products