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
      <div id="container">	
        <div className="product-details">
      <h1>{offer.title}</h1>
      <h6>category</h6>
          <div className="control">
          <Button onClick={handledelete} variant="outline-danger">Delete Offer</Button>
          </div>
        </div>
        <div className="product-image">
          <img src="" alt="" />
        </div>
      </div>
  </div>
  )
}

export default AOffersCard