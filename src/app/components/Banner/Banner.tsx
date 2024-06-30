import React from 'react'

function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide my-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://static.vecteezy.com/system/resources/previews/041/915/928/non_2x/spring-special-offer-floral-theme-for-twitter-header-editor_template.jpeg?last_updated=1711918933" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://static.vecteezy.com/system/resources/previews/033/232/646/non_2x/floral-spring-sale-twitter-header-editor_template.jpeg?last_updated=1698775958" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/previews/041/915/976/non_2x/floral-x-sale-header-editor_template.jpeg?last_updated=1711920239" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel