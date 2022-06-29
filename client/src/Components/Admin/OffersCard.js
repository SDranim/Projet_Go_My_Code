import React from 'react'
import {Button} from "react-bootstrap"
function offersCard() {
  return (
      <div>
      <div id="container">	
        <div className="product-details">
      <h1>title</h1>
      <h6>category</h6>
          <div className="control">
          <Button  variant="outline-danger">Delete Offer</Button>
          </div>
        </div>
        <div className="product-image">
          <img src="" alt="" />
        </div>
      </div>
  </div>
  )
}

export default offersCard