import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteOffer } from '../../../JS/Actions/SellerActions';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function OfferCard({e}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleDeleteOffer = () => {
    confirmAlert({
      title: 'Confirm to delete offer',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> {dispatch(deleteOffer(e._id));navigate("/myOffers")}
        },
        {
          label: 'No',
          onClick: () => navigate("/myOffers")
        }
      ]
    });
  };

  return (
  <div>

      <div id="container-c">	
        <div className="product-details">
      <h1>{e.title}</h1> 
      <h6>{e.category}</h6>
          <p className="information">{e.description}</p>
          <div className="control">
          <Link to={`/updateOffer/${e._id}`}>
          <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Update</Button>
          </Link>
          <Link to={`/changeOfferImage/${e._id}`}>
          <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Update Image</Button>
          </Link>
          <Button onClick={handleDeleteOffer} style={{backgroundColor:"#F1BBD5"}} variant="outline-light">Delete</Button>

          
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