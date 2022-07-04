import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OfferCard from './OfferCard'
import { myOffers } from '../../../JS/Actions/SellerActions';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function OffersList() {
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(myOffers())
},[dispatch])
  const Offers = useSelector((state)=>state.OfferReducer.myOffers)
  const loading= useSelector((state)=>state.OfferReducer.load)

  return (
    <div className='offerlist'>
    <Link to='/profileSeller'>
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
  : !Offers.length ? <h2>No Offers</h2>: Offers.map((e,i)=>(< OfferCard e={e} key={i}/>)) }
    </div>
  )
}

export default OffersList