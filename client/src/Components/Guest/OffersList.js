import React from 'react'
import OffersCard from './OffersCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function OffersList() {
  const Offers = useSelector((state)=>state.OfferReducer.myOffers)
  const loading= useSelector((state)=>state.OfferReducer.load)
  return (
    <div className='offerlist'>
       <Link to='/'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
    {loading?   
     <div className="center">
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
   </div>
   : !Offers.length ? <h2>No Offers</h2>:Offers.map((offer,i)=>(< OffersCard offer={offer} key={i}/>))
    }
      </div>
  )
}

export default OffersList