import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteOffer } from '../../../JS/Actions/SellerActions';

function OfferCard({e}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleDeleteOffer = () => {
    if (window.confirm("Are you sure you want to delete this offer")) {
      dispatch(deleteOffer(e._id));
      navigate("/myOffers");
    }
  };

  return (
  <div>
      <div id="container">	
        <div className="product-details">
      <h1>{e.title}</h1> 
      <h6>{e.category}</h6>
          <p className="information">{e.description}</p>
          <div className="control">
          <Link to={`/updateOffer/${e._id}`}>
          <Button variant="outline-warning">Update</Button>
          </Link>
          <Link to={`/changeOfferImage/${e._id}`}>
          <Button variant="outline-warning">Update Image</Button>
          </Link>
          <Button onClick={handleDeleteOffer} variant="outline-danger">Delete</Button>
          
          </div>
        </div>
        <div className="product-image">
          <img src={e && e.photo
                      ? `Image/${e?.photo}`
                      : "https://cdn2.vectorstock.com/i/thumb-large/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"} alt="" />
         
          <div className="info">
            <h1>Available until:</h1>
            <ul>
              <li><strong>Date: </strong>{e.date}</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  )
}

export default OfferCard