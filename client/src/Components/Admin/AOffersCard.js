import React from 'react'
import {Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteOffer } from '../../JS/Actions/AdminActions'

function AOffersCard({offer}) {
const dispatch=useDispatch()
const navigate=useNavigate()
const handledelete=()=>{
  dispatch(deleteOffer(offer._id))
  navigate('/offers')
}
  return (
      <div>
      <div id="container-c">	
        <div className="product-details">
      <h1>{offer.title}</h1>
      <h6>category</h6>
          <div className="control">
          <Button onClick={handledelete} style={{backgroundColor:"#F1BBD5",color:"#570A57"}} variant="outline-light">Delete Offer</Button>

          </div>
        </div>
        <div className="product-image">
          <img src={`Image/${offer?.photo}`} alt="" />
        </div>
      </div>
  </div>
  )
}

export default AOffersCard