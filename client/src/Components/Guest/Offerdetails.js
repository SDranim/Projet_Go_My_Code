import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function Offerdetails() {
const offers=useSelector((state)=>state.OfferReducer.myOffers)
 
const {id}=useParams()
const offer=offers.find(offre=>offre._id===id)
console.log(offer)

  return (
    <div>
        <Link to='/allOffers'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
  <div className="container-ss">
        
        <div className="card-ss">
          <div className="card-header-ss">
            {/* <img src={`Image/${offer?.photo}`} alt="" /> */}
          </div>
          <div className="card-body-ss">
            <span className="tag tag-purple">{offer?.category}</span>
            <h4>
          {offer?.title}
            </h4>
            <p>
            {offer?.description}
            </p>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default Offerdetails