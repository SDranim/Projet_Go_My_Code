import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Found({offer}) {
  return (
    <div>
    <div id="container">	
      <div className="product-details">
    <h1>{offer.title}</h1>
    <h6>{offer.category}</h6>
    <h6>{offer.sellerId.name}</h6>

        <div className="control">
          <Link to={`/offerDetails/${offer._id}`}>
        <Button>Details</Button>
        </Link>
        </div>
      </div>
      <div className="product-image">
        <img src={offer && offer.photo
                    ? `Image/${offer?.photo}`
                    : "https://cdn2.vectorstock.com/i/thumb-large/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"} alt="" />
       
        <div className="info">
          <h1>Available until:</h1>
          <ul>
            <li><strong>Date: </strong>{offer.date}</li>
          </ul>
        </div>
      </div>
    </div>
</div>
  )
}

export default Found