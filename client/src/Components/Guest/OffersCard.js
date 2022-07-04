import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getSellerprofile } from '../../JS/Actions/UserActions'

function OffersCard({offer}) {
const dispatch=useDispatch()
const navigate=useNavigate()
  const handleGetSeller=()=>{
    dispatch(getSellerprofile(offer.sellerId._id))
    navigate('/getprofileSeller')
    }
  return (
    <div>
    <div id="container-c">	
      <div className="product-details">
    <h1>{offer.title}</h1>
    <h6>{offer.category}</h6>
    <h6>{offer.sellerId.name}</h6>

        <div className="control">
          <Link to={`/offerDetails/${offer._id}`}>
          <Button style={{backgroundColor:"#F1BBD5",color:"#570A57"}} variant="outline-light">Details</Button>
        
        </Link>
     <Button onClick={handleGetSeller} style={{backgroundColor:"#570A57",marginLeft:"10px"}} variant="outline-light"> Go To Profile</Button>

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

export default OffersCard