import React from 'react'

const MastHead = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
          <h1 className="my-4">Shop Name</h1>
          <div className="list-group">
              <a className="list-group-item" href="#!">Category 1</a>
              <a className="list-group-item" href="#!">Category 2</a>
              <a className="list-group-item" href="#!">Category 3</a>
          </div>
      </div>
      <div className="col-lg-9">
          <div className="carousel slide my-4" id="carouselExampleIndicators" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active"><img className="d-block img-fluid" src="https://via.placeholder.com/900x350" alt="First slide" /></div>
                  <div className="carousel-item"><img className="d-block img-fluid" src="https://via.placeholder.com/900x350" alt="Second slide" /></div>
                  <div className="carousel-item"><img className="d-block img-fluid" src="https://via.placeholder.com/900x350" alt="Third slide" /></div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
    </div>
  )
}
export default MastHead