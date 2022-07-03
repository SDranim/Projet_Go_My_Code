import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Offerdetails() {
const offers=useSelector((state)=>state.OfferReducer.myOffers)
 
const {id}=useParams()
const offer=offers.find(offre=>offre._id===id)
console.log(offer)

  return (
    <div>
  <div className="container">
        
        <div className="card">
          <div className="card-header">
            <img src={`./Image/${offer?.photo}`} alt="offer" />
          </div>
          <div className="card-body">
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